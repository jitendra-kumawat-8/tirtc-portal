// ---------------------------------------------------------------------------
// API request / response types for CIIJobSite Jabalpur endpoints
// Base: http://13.126.3.220:93/api
// ---------------------------------------------------------------------------

// ── Shared ─────────────────────────────────────────────────────────────────

/** Generic envelope returned by most endpoints (API uses lowercase keys) */
export interface ApiEnvelope {
  status: boolean;
  msg: string;
}

// ── User profile ────────────────────────────────────────────────────────────

/**
 * Profile shape inferred from JWT `user` claim and the updateprofile fields.
 * Extend as the real API clarifies additional fields.
 */
export interface UserProfile {
  userId: string;
  userName: string;
  fullName: string;
  displayName: string;
  email: string;
  contactNo: string | null;
  contactNumber?: string | null;
  profilePic: string;
  userType: "User" | "Recruiter" | "Company";
  jobTitle: string;
  // extended fields (present after updateprofile)
  fatherName?: string;
  dateOfBirth?: string;
  headLine?: string;
  iSDCode?: string;
  workStatus?: string;
  nationality?: string;
  linkedInProfile?: string;
  address?: string;
  currentAddress?: string;
  district?: string;
  state?: string;
  country?: string;
  pincode?: string;
  gender?: string;
  currentSalary?: string;
  minimumSalaryExpectation?: string;
  maximumSalaryExpectation?: string;
  keySkillsList?: string[];
  preferredJobTitlesList?: string[];
  preferredLocationList?: string[];
  highestEducation?: string;
  otherEducationDetails?: string;
  profileSummary?: string;
  totalExperienceYears?: string;
  totalExperienceMonths?: string;
  aadharCardNo?: string;
  sourceOfCandidate?: string;
  nameOfCollege?: string;
  typeOfLicense?: string;
  validityOfLicense?: string;
  proffesion?: string;
  countryOfCitizenship?: string;
  haveWorkPermit?: string;
  haveValidPassport?: string;
  validityOfPassport?: string;
  highestQualificationCategory?: string;
  highestQualificationSubCategory?: string;
  otherHighestQualification?: string;
  resume?: string;
  certificateList?: string[];
  documentAttachList?: string[];
  isAcceptPrivacy?: boolean;
  isAcceptMarketingCommunication?: boolean;
  isProfileUpdate?: boolean;
  status?: boolean;
  msg?: string;
}

// ── Register ────────────────────────────────────────────────────────────────

export interface RegisterRequest {
  email: string;
  contactNumber: string;
  password: string;
  fullName: string;
}

/** Register returns the same envelope as Login (user + token inside data) */
export interface AuthData {
  user: UserProfile;
  access_token: string;
}

export interface RegisterResponse extends ApiEnvelope {
  data?: AuthData;
}

// ── Login ────────────────────────────────────────────────────────────────────

export interface LoginRequest {
  /** email is sent as userName */
  userName: string;
  password: string;
}

export interface LoginResponse extends ApiEnvelope {
  data?: AuthData;
  /** Fallback flat fields (some builds) */
  token?: string;
  userId?: string;
  fullName?: string;
  email?: string;
  userType?: string;
  profilePic?: string;
  displayName?: string;
  user?: UserProfile;
}

// ── Get Profile ──────────────────────────────────────────────────────────────

/** GET /api/getprofile — returns the profile of the authenticated user */
export type GetProfileResponse = UserProfile;

// ── Update Profile ───────────────────────────────────────────────────────────

/**
 * Sent as multipart/form-data.
 * File fields (resumeFile, certificates, documentAttach) accept File objects.
 * List fields (keySkillsList, preferredJobTitlesList, preferredLocationList)
 * should be JSON-stringified arrays, e.g. '["C#",".NET"]'.
 */
export interface UpdateProfileRequest {
  userId: string;
  fullName?: string;
  dateOfBirth?: string;
  displayName?: string;
  headLine?: string;
  contactNumber?: string;
  email?: string;
  iSDCode?: string;
  workStatus?: string;
  nationality?: string;
  linkedInProfile?: string;
  address?: string;
  totalExperienceYears?: string;
  totalExperienceMonths?: string;
  currentAddress?: string;
  currentSalary?: string;
  keySkillsList?: string;          // JSON string: '["C#",".NET"]'
  highestEducation?: string;
  otherEducationDetails?: string;
  resumeFile?: File | null;
  profileSummary?: string;
  preferredJobTitlesList?: string; // JSON string
  preferredLocationList?: string;  // JSON string
  minimumSalaryExpectation?: string;
  maximumSalaryExpectation?: string;
  gender?: string;
  jobTitle?: string;
  certificates?: File | File[] | null;
  aadharCardNo?: string;
  fatherName?: string;
  sourceOfCandidate?: string;
  nameOfCollege?: string;
  typeOfLicense?: string;
  validityOfLicense?: string;
  proffesion?: string;
  countryOfCitizenship?: string;
  haveWorkPermit?: string;
  haveValidPassport?: string;
  validityOfPassport?: string;
  documentsAttach?: File | null;
  highestQualificationCategory?: string;
  highestQualificationSubCategory?: string;
  otherHighestQualification?: string;
  district?: string;
  state?: string;
  country?: string;
  pincode?: string;
}

export interface UpdateProfileResponse extends ApiEnvelope {}

// ── Apply for job / training interest ────────────────────────────────────────

/** POST /api/applyforjob — requires Bearer token */
export interface ApplyForJobRequest {
  jobId: string;
  jobType: "JOB" | "TRAINING";
}

export interface ApplyForJobResponse extends ApiEnvelope {}

export interface OptionItem {
  value: string;
  text: string;
}

export interface CountryData {
  countryId: string;
  countryName: string;
  isoCode: string;
}

export interface StateData {
  stateId: string;
  stateName: string;
}

export interface CityData {
  cityId: string;
  cityName: string;
}

export interface CountryListResponse extends ApiEnvelope {
  data: CountryData[];
}

export interface StateListResponse extends ApiEnvelope {
  data: StateData[];
}

export interface CityListResponse extends ApiEnvelope {
  data: CityData[];
}

export interface JobRoleListResponse extends ApiEnvelope {
  data: OptionItem[];
}

export interface JobSkillListResponse extends ApiEnvelope {
  data: OptionItem[];
}

export interface LicenseTypeListResponse extends ApiEnvelope {
  data: OptionItem[];
}

export interface CountryOfCitizenshipListResponse extends ApiEnvelope {
  data: OptionItem[];
}

export interface HighestQualificationCategoryListResponse extends ApiEnvelope {
  data: OptionItem[];
}

export interface HighestQualificationSubCategoryListResponse
  extends ApiEnvelope {
  data: OptionItem[];
}
