import dayjs from "dayjs";
import type { ProfileFormValues } from "../components/Profile/ProfileForm";
import type { UserProfile } from "../types/api";

export const PROFILE_FORM_DEFAULTS: ProfileFormValues = {
  fullName: "",
  email: "",
  contactNumber: "",
  dateOfBirth: null,
  nationality: "",
  gender: "",
  workStatus: "",
  linkedInProfile: "",
  address: "",
  country: "India",
  state: "",
  district: "",
  pincode: "",
  keySkillsList: [],
  highestEducation: "",
  preferredLocationList: [],
  profileSummary: "",
};

export function normalizeMultiValue(value?: string | string[] | null) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .flatMap((item) =>
        item
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean)
      )
      .filter(Boolean);
  }

  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item).trim()).filter(Boolean);
    }
  } catch {
    /* not JSON */
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getContactNumber(user: {
  contactNo?: string | null;
  contactNumber?: string | null;
}) {
  return user.contactNumber || user.contactNo || "";
}

/** Same mapping as the profile page — prefills modal and `/profile` form from API user. */
export function mapProfileToFormValues(user: UserProfile): ProfileFormValues {
  return {
    fullName: user.fullName || "",
    email: user.email || user.userName || "",
    contactNumber: String(getContactNumber(user) ?? "").replace(/null/gi, ""),
    dateOfBirth: user.dateOfBirth ? dayjs(user.dateOfBirth) : null,
    nationality: user.nationality?.trim() || user.country?.trim() || "",
    gender: user.gender || "",
    workStatus: user.workStatus || "",
    linkedInProfile: user.linkedInProfile || "",
    address: user.address || "",
    country: user.country || "India",
    state: user.state || "",
    district: user.district || "",
    pincode: user.pincode || "",
    keySkillsList: normalizeMultiValue(user.keySkillsList),
    highestEducation: user.highestEducation || "",
    preferredLocationList: normalizeMultiValue(user.preferredLocationList),
    profileSummary: user.profileSummary || "",
  };
}
