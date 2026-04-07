import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { isUnauthorizedError } from "../services/api";
import { register, login, getProfile, updateProfile } from "../services/authService";
import type {
  UserProfile,
  RegisterRequest,
  LoginRequest,
  UpdateProfileRequest,
  AuthData,
} from "../types/api";

// ── Context shape ─────────────────────────────────────────────────────────

interface AuthCtx {
  user: UserProfile | null;
  accessToken: string | null;
  isAuthReady: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  registerUser: (vars: RegisterRequest, onSuccess?: () => void) => void;
  loginUser: (vars: LoginRequest & { rememberMe?: boolean }, onSuccess?: () => void) => void;
  logout: () => void;
  refetchUser: () => Promise<void>;
  /** Update cached user + storage from a profile already returned by the API (avoids a duplicate getProfile). */
  syncUserProfile: (profile: UserProfile) => void;
  updateUserProfile: (vars: UpdateProfileRequest) => Promise<void>;
}

const AuthContext = createContext<AuthCtx | undefined>(undefined);

// ── Storage helpers ───────────────────────────────────────────────────────

const LS_USER = "user";
const LS_TOKEN = "accessToken";

const readLS = <T,>(key: string): T | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw =
      localStorage.getItem(key) ?? sessionStorage.getItem(key) ?? null;
    if (!raw) return null;
    return key === LS_USER ? (JSON.parse(raw) as T) : (raw as unknown as T);
  } catch {
    return null;
  }
};

const saveToStorage = (
  storage: Storage,
  user: UserProfile,
  token: string
) => {
  storage.setItem(LS_USER, JSON.stringify(user));
  storage.setItem(LS_TOKEN, token);
};

const clearStorage = () => {
  [localStorage, sessionStorage].forEach((s) => {
    s.removeItem(LS_USER);
    s.removeItem(LS_TOKEN);
  });
};

// ── Provider ──────────────────────────────────────────────────────────────

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUser(readLS<UserProfile>(LS_USER));
    setAccessToken(readLS<string>(LS_TOKEN));
    setIsAuthReady(true);
  }, []);

  // ── Register ────────────────────────────────────────────────────────────

  const [onRegisterSuccess, setOnRegisterSuccess] = useState<(() => void) | undefined>(undefined);
  const [onLoginSuccess, setOnLoginSuccess] = useState<(() => void) | undefined>(undefined);

  const persistSession = (authData: AuthData, rememberMe: boolean) => {
    setUser(authData.user);
    setAccessToken(authData.access_token);
    const storage = rememberMe ? localStorage : sessionStorage;
    saveToStorage(storage, authData.user, authData.access_token);
  };

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      if (!data?.status) {
        enqueueSnackbar(data?.msg || "Registration failed", { variant: "error" });
        return;
      }
      // API returns user + token on successful registration — log in automatically
      if (data.data?.access_token && data.data?.user) {
        persistSession(data.data, false);
        enqueueSnackbar("Account created and logged in!", { variant: "success" });
      } else {
        enqueueSnackbar("Account created! Please log in.", { variant: "success" });
      }
      onRegisterSuccess?.();
    },
    onError: (error: Error) => {
      enqueueSnackbar(error.message || "Registration failed, please try again.", {
        variant: "error",
      });
    },
  });

  // ── Login ────────────────────────────────────────────────────────────────

  const loginMutation = useMutation({
    mutationFn: ({ rememberMe: _rm, ...creds }: LoginRequest & { rememberMe?: boolean }) =>
      login(creds),
    onSuccess: (data, vars) => {
      if (!data?.status) {
        enqueueSnackbar(data?.msg || "Login failed", { variant: "error" });
        return;
      }

      // Primary shape: { status, msg, data: { user, access_token } }
      const authData = data.data;
      if (!authData?.access_token || !authData?.user) {
        enqueueSnackbar("Login failed — unexpected response from server.", { variant: "error" });
        return;
      }

      persistSession(authData, !!(vars as any).rememberMe);
      enqueueSnackbar("Login successful!", { variant: "success" });
      onLoginSuccess?.();
    },
    onError: (error: Error) => {
      enqueueSnackbar(error.message || "Login failed, please try again.", {
        variant: "error",
      });
    },
  });

  // ── Logout ────────────────────────────────────────────────────────────────

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    clearStorage();
    enqueueSnackbar("Logged out successfully", { variant: "info" });
    // Navigation is handled by the calling component
  };

  // ── Refetch user profile ─────────────────────────────────────────────────

  const refetchUser = async () => {
    if (!accessToken) return;
    setIsLoading(true);
    try {
      const profile = await getProfile();
      setUser(profile);
      const currentStorage = localStorage.getItem(LS_USER)
        ? localStorage
        : sessionStorage;
      currentStorage.setItem(LS_USER, JSON.stringify(profile));
    } catch (error: unknown) {
      if (isUnauthorizedError(error)) {
        setUser(null);
        setAccessToken(null);
        return;
      }
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const syncUserProfile = useCallback((profile: UserProfile) => {
    setUser(profile);
    if (typeof window === "undefined") return;
    const currentStorage = localStorage.getItem(LS_USER)
      ? localStorage
      : sessionStorage;
    currentStorage.setItem(LS_USER, JSON.stringify(profile));
  }, []);

  // ── Update profile ───────────────────────────────────────────────────────

  const updateUserProfile = async (vars: UpdateProfileRequest) => {
    setIsLoading(true);
    try {
      const res = await updateProfile(vars);
      if (!res?.status) {
        enqueueSnackbar(res?.msg || "Update failed", { variant: "error" });
        return;
      }
      enqueueSnackbar("Profile updated successfully!", { variant: "success" });
      // Refresh local user state
      await refetchUser();
    } catch (error: unknown) {
      if (isUnauthorizedError(error)) {
        return;
      }
      enqueueSnackbar(
        error instanceof Error
          ? error.message
          : "Profile update failed, please try again.",
        { variant: "error" }
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ── Context value ─────────────────────────────────────────────────────────

  const value: AuthCtx = {
    user,
    accessToken,
    isAuthReady,
    isLoading:
      isLoading ||
      loginMutation.isPending ||
      registerMutation.isPending,
    isAuthenticated: !!user && !!accessToken,
    registerUser: (vars, onSuccess) => {
      setOnRegisterSuccess(() => onSuccess);
      registerMutation.mutate(vars);
    },
    loginUser: (vars, onSuccess) => {
      setOnLoginSuccess(() => onSuccess);
      loginMutation.mutate(vars);
    },
    logout,
    refetchUser,
    syncUserProfile,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

// ── Hook ──────────────────────────────────────────────────────────────────

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};

export type { UserProfile, RegisterRequest, LoginRequest, UpdateProfileRequest };
