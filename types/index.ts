// Common API response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  status?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any; // Allow additional properties
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
  [key: string]: any;
}

export interface AuthResponse {
  data: {
    user: User;
    access_token: string;
  };
  status: boolean;
  msg?: string;
}

// Modal types
export interface ModalConfig {
  title?: string;
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  actions?: React.ReactNode;
  onClose?: () => void;
}

// Form field types
export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

// File upload types
export interface FileUploadConfig {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  maxFiles?: number;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  path?: string;
  icon?: React.ComponentType<any>;
  children?: NavItem[];
  disabled?: boolean;
  external?: boolean;
}
