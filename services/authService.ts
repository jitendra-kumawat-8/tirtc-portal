import apiClient from "./api";
import type {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  GetProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from "../types/api";

// ---------------------------------------------------------------------------
// POST /api/userregister
// ---------------------------------------------------------------------------
export async function register(
  data: RegisterRequest
): Promise<RegisterResponse> {
  const response = await apiClient.post<RegisterResponse>(
    "/userregister",
    data
  );
  return response.data;
}

// ---------------------------------------------------------------------------
// POST /api/login
// ---------------------------------------------------------------------------
export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>("/login", data);
  return response.data;
}

// ---------------------------------------------------------------------------
// GET /api/getprofile   — requires Bearer token (injected by interceptor)
// ---------------------------------------------------------------------------
export async function getProfile(): Promise<GetProfileResponse> {
  const response = await apiClient.get<GetProfileResponse>("/getprofile");
  return response.data;
}

// ---------------------------------------------------------------------------
// POST /api/updateprofile  — multipart/form-data, requires Bearer token
// ---------------------------------------------------------------------------
export async function updateProfile(
  data: UpdateProfileRequest
): Promise<UpdateProfileResponse> {
  const formData = new FormData();

  // Append every non-undefined field
  const fileKeys: Array<keyof UpdateProfileRequest> = [
    "resumeFile",
    "certificates",
    "documentsAttach",
  ];

  (Object.keys(data) as Array<keyof UpdateProfileRequest>).forEach((key) => {
    const value = data[key];
    if (value === undefined || value === null) return;

    if (fileKeys.includes(key)) {
      if (Array.isArray(value)) {
        // certificates can be multiple files
        (value as File[]).forEach((file) => formData.append(key, file));
      } else {
        formData.append(key, value as File);
      }
    } else {
      formData.append(key, value as string);
    }
  });

  const response = await apiClient.post<UpdateProfileResponse>(
    "/updateprofile",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data;
}
