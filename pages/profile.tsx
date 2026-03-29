import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Navbar from "../features/HomePage/sections/Navbar";
import ProfileForm, {
  ProfileFormValues,
} from "../components/Profile/ProfileForm";
import { useAuth } from "../context/AuthContext";
import { getProfile } from "../services/authService";
import type { UserProfile } from "../types/api";
import {
  PROFILE_FORM_DEFAULTS,
  mapProfileToFormValues,
} from "../utils/profileFormMapping";
import { profileFormSchema } from "../utils/profileFormSchema";

type GetProfileResponseShape =
  | UserProfile
  | {
    data?: UserProfile | { data?: UserProfile };
    status?: boolean;
    msg?: string;
  };

const extractProfileFromResponse = (
  response: GetProfileResponseShape
): UserProfile | null => {
  if (!response || typeof response !== "object") {
    return null;
  }

  // Case 1: service already returns the actual profile object
  if ("userId" in response) {
    return response as UserProfile;
  }

  // Case 2: axios/service returns { data: profile }
  if ("data" in response && response.data && typeof response.data === "object") {
    if ("userId" in response.data) {
      return response.data as UserProfile;
    }

    // Case 3: axios/service returns { data: { data: profile } }
    if (
      "data" in response.data &&
      response.data.data &&
      typeof response.data.data === "object" &&
      "userId" in response.data.data
    ) {
      return response.data.data as UserProfile;
    }
  }

  return null;
};

export default function ProfilePage() {
  const router = useRouter();

  const {
    user,
    accessToken,
    isAuthReady,
    isAuthenticated,
    isLoading,
    refetchUser,
    updateUserProfile,
  } = useAuth();

  const [pageReady, setPageReady] = useState(false);
  const [profileUser, setProfileUser] = useState<UserProfile | null>(null);

  const methods = useForm<ProfileFormValues>({
    defaultValues: PROFILE_FORM_DEFAULTS,
    resolver: yupResolver(profileFormSchema) as any,
    mode: "onBlur",
  });

  const { reset, handleSubmit } = methods;

  const resetValues = useMemo(() => {
    return profileUser
      ? mapProfileToFormValues(profileUser)
      : PROFILE_FORM_DEFAULTS;
  }, [profileUser]);

  useEffect(() => {
    if (!isAuthReady) return;

    if (!accessToken) {
      void router.replace("/login");
      return;
    }

    let cancelled = false;

    const loadProfile = async () => {
      try {
        const response = await getProfile();
        if (cancelled) return;

        const profile = extractProfileFromResponse(
          response as GetProfileResponseShape
        );

        if (!profile) {
          throw new Error("Invalid profile response shape");
        }

        setProfileUser(profile);
        reset(mapProfileToFormValues(profile));
        setPageReady(true);
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to load profile:", error);
          void router.replace("/login");
        }
      }
    };

    void loadProfile();

    return () => {
      cancelled = true;
    };
  }, [accessToken, isAuthReady, reset, router]);

  const onSubmit = handleSubmit(async (values) => {
    const activeUser = profileUser || user;
    if (!activeUser?.userId) return;

    await updateUserProfile({
      userId: activeUser.userId,
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      contactNumber: values.contactNumber.trim(),
      workStatus: values.workStatus || undefined,
      nationality: values.nationality?.trim() || undefined,
      dateOfBirth: values.dateOfBirth
        ? dayjs(values.dateOfBirth).format("YYYY-MM-DD")
        : undefined,
      gender: values.gender || undefined,
      linkedInProfile: values.linkedInProfile?.trim() || undefined,
      address: values.address?.trim() || undefined,
      country: values.country || undefined,
      state: values.state || undefined,
      district: values.district || undefined,
      pincode: values.pincode?.trim() || undefined,
      keySkillsList: values.keySkillsList.length
        ? JSON.stringify(values.keySkillsList)
        : undefined,
      highestEducation: values.highestEducation || undefined,
      preferredLocationList: values.preferredLocationList.length
        ? JSON.stringify(values.preferredLocationList)
        : undefined,
      profileSummary: values.profileSummary?.trim() || undefined,
    });

    await refetchUser();
  });

  if (!isAuthReady) {
    return null;
  }

  if (!isAuthenticated && !accessToken) {
    return null;
  }

  if (!pageReady) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "#F7FAFC" }}>
        <Navbar scrollToSection={() => { }} />
        <Box
          sx={{
            minHeight: "calc(100vh - 76px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F7FAFC",
      }}
    >
      <Navbar scrollToSection={() => { }} />

      <Box
        component="section"
        sx={{
          py: { xs: 4, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Box>
              <Typography variant="h3" sx={{ mb: 1 }}>
                My Profile
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Update your details so your profile stays complete and ready for
                applications.
              </Typography>
            </Box>

            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                bgcolor: "#FFFFFF",
              }}
            >
              <FormProvider {...methods}>
                <form onSubmit={onSubmit}>
                  <ProfileForm />

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="flex-end"
                    sx={{ mt: 4 }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => reset(resetValues)}
                    >
                      Reset
                    </Button>

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isLoading || !pageReady}
                    >
                      Save Profile
                    </Button>
                  </Stack>
                </form>
              </FormProvider>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}