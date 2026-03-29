import * as yup from "yup";

export const profileFormSchema = yup.object({
    fullName: yup
      .string()
      .trim()
      .required("Full name is required")
      .min(2, "Full name must be at least 2 characters"),
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Enter a valid email address"),
    contactNumber: yup
      .string()
      .trim()
      .required("Contact number is required")
      .matches(/^\d{10,15}$/, "Enter a valid phone number"),
    dateOfBirth: yup.mixed().nullable().required("Date of birth is required"),
    nationality: yup.string().trim().required("Nationality is required"),
    gender: yup.string().nullable().default(""),
    workStatus: yup.string().trim().required("Work status is required"),
    linkedInProfile: yup
      .string()
      .nullable()
      .test(
        "is-valid-linkedin",
        "Enter a valid URL",
        (value) => !value || /^https?:\/\/.+/i.test(value)
      ),
    address: yup.string().max(200, "Address must be under 200 characters"),
    country: yup.string().nullable().default(""),
    state: yup.string().nullable().default(""),
    district: yup.string().nullable().default(""),
    pincode: yup
      .string()
      .nullable()
      .test(
        "is-valid-pincode",
        "Enter a valid pincode",
        (value) => !value || /^\d{4,10}$/.test(value)
      ),
    keySkillsList: yup.array(yup.string().trim()).default([]),
    highestEducation: yup.string().nullable().default(""),
    preferredLocationList: yup.array(yup.string().trim()).default([]),
    profileSummary: yup
      .string()
      .max(500, "Profile summary must be under 500 characters"),
  })
  .required();
