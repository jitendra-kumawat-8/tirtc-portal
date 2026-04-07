import axios from "axios";

// Base URL — override via NEXT_PUBLIC_API_URL in .env.local
const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://admin.tirtc-cii.in/api";

/** True when error is an axios 401 — callers should skip UI updates (session cleared + redirect). */
export function isUnauthorizedError(error: unknown): boolean {
  return axios.isAxiosError(error) && error.response?.status === 401;
}

let redirecting401 = false;

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Bearer token from storage on every request
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token =
        localStorage.getItem("accessToken") ||
        sessionStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response error handling — expired/invalid token
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");
      if (!redirecting401) {
        redirecting401 = true;
        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
