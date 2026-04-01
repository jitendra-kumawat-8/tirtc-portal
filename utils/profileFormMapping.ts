import dayjs from "dayjs";
import type { ProfileFormValues } from "../components/Profile/ProfileForm";
import type { UserProfile } from "../types/api";

export const PROFILE_FORM_DEFAULTS: ProfileFormValues = {
  fullName: "",
  dateOfBirth: null,
  contactNumber: "",
  email: "",
  nationality: "",
  address: "",
  country: "",
  state: "",
  district: "",
  pincode: "",
  gender: "",
  aadharCardNo: "",
  fatherName: "",
  sourceOfCandidate: "",
  workStatus: [],
  linkedInProfile: "",
  totalExperienceYears: "",
  totalExperienceMonths: "",
  currentAddress: "",
  currentSalary: "",
  keySkillsList: [],
  nameOfCollege: "",
  typeOfLicense: "",
  validityOfLicense: null,
  highestQualificationCategory: "",
  highestQualificationSubCategory: "",
  otherHighestQualification: "",
  countryOfCitizenship: "",
  haveWorkPermit: "",
  haveValidPassport: "",
  validityOfPassport: null,
  documentsAttach: null,
  resumeFile: null,
  certificates: [],
  preferredJobTitlesList: [],
  preferredLocationList: [],
  minimumSalaryExpectation: "",
  maximumSalaryExpectation: "",
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
    dateOfBirth: user.dateOfBirth ? dayjs(user.dateOfBirth) : null,
    contactNumber: String(getContactNumber(user) ?? "").replace(/null/gi, ""),
    email: user.email || user.userName || "",
    nationality: user.nationality?.trim() || "",
    address: user.address || "",
    country: user.country || "",
    state: user.state || "",
    district: user.district || "",
    pincode: user.pincode || "",
    gender: user.gender || "",
    aadharCardNo: user.aadharCardNo || "",
    fatherName: user.fatherName || "",
    sourceOfCandidate: user.sourceOfCandidate || "",
    workStatus: normalizeMultiValue(user.workStatus),
    linkedInProfile: user.linkedInProfile || "",
    totalExperienceYears: user.totalExperienceYears || "",
    totalExperienceMonths: user.totalExperienceMonths || "",
    currentAddress: user.currentAddress || "",
    currentSalary: user.currentSalary || "",
    keySkillsList: normalizeMultiValue(user.keySkillsList),
    nameOfCollege: user.nameOfCollege || "",
    typeOfLicense: user.typeOfLicense || "",
    validityOfLicense: user.validityOfLicense
      ? dayjs(user.validityOfLicense)
      : null,
    highestQualificationCategory: user.highestQualificationCategory || "",
    highestQualificationSubCategory:
      user.highestQualificationSubCategory || "",
    otherHighestQualification: user.otherHighestQualification || "",
    countryOfCitizenship: user.countryOfCitizenship || "",
    haveWorkPermit: user.haveWorkPermit || "",
    haveValidPassport: user.haveValidPassport || "",
    validityOfPassport: user.validityOfPassport
      ? dayjs(user.validityOfPassport)
      : null,
    documentsAttach: null,
    resumeFile: null,
    certificates: [],
    preferredJobTitlesList: normalizeMultiValue(user.preferredJobTitlesList),
    preferredLocationList: normalizeMultiValue(user.preferredLocationList),
    minimumSalaryExpectation: user.minimumSalaryExpectation || "",
    maximumSalaryExpectation: user.maximumSalaryExpectation || "",
    profileSummary: user.profileSummary || "",
  };
}
