import dayjs from "dayjs";
import * as yup from "yup";

const numericString = (label: string) =>
  yup
    .string()
    .nullable()
    .test(
      `is-valid-${label}`,
      "Enter a valid number",
      (value) => !value || /^\d+(\.\d+)?$/.test(value)
    );

export const profileFormSchema = yup
  .object({
    fullName: yup
      .string()
      .trim()
      .required("Full name is required")
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters"),
    dateOfBirth: yup
      .mixed()
      .nullable()
      .required("Date of birth is required")
      .test("is-valid-dob", "Please enter a valid date of birth", (value) => {
        if (!value) return false;
        const birthDate = dayjs(value as dayjs.ConfigType);
        const today = dayjs();

        if (!birthDate.isValid() || birthDate.isAfter(today, "day")) {
          return false;
        }

        const age = today.diff(birthDate, "year");
        return age >= 18 && age <= 100;
      }),
    contactNumber: yup
      .string()
      .trim()
      .required("Contact number is required")
      .matches(/^\d{10,15}$/, "Enter a valid phone number"),
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Enter a valid email address"),
    nationality: yup
      .string()
      .trim()
      .required("Country of nationality is required"),
    address: yup
      .string()
      .trim()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters")
      .max(200, "Address must be less than 200 characters"),
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
    gender: yup.string().trim().required("Gender is required"),
    aadharCardNo: yup
      .string()
      .nullable()
      .test(
        "is-valid-aadhar",
        "Enter a valid 12-digit Aadhar number",
        (value) => !value || /^\d{12}$/.test(value)
      ),
    fatherName: yup
      .string()
      .trim()
      .required("Father's Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters"),
    sourceOfCandidate: yup
      .string()
      .trim()
      .required("Source information is required"),
    workStatus: yup
      .array(yup.string().trim())
      .min(1, "Work status is required")
      .default([]),
    linkedInProfile: yup
      .string()
      .nullable()
      .test(
        "is-valid-linkedin",
        "Enter a valid URL",
        (value) => !value || /^https?:\/\/.+/i.test(value)
      ),
    totalExperienceYears: yup
      .string()
      .trim()
      .required("Total Experience Years is required"),
    totalExperienceMonths: yup
      .string()
      .trim()
      .required("Total Experience Months is required"),
    currentAddress: yup.string().nullable().default(""),
    currentSalary: numericString("current-salary").default(""),
    keySkillsList: yup.array(yup.string().trim()).default([]),
    nameOfCollege: yup.string().nullable().default(""),
    typeOfLicense: yup.string().nullable().default(""),
    validityOfLicense: yup.mixed().nullable(),
    highestQualificationCategory: yup.string().nullable().default(""),
    highestQualificationSubCategory: yup.string().nullable().default(""),
    otherHighestQualification: yup.string().nullable().default(""),
    countryOfCitizenship: yup.string().nullable().default(""),
    haveWorkPermit: yup.string().nullable().default(""),
    haveValidPassport: yup.string().nullable().default(""),
    validityOfPassport: yup.mixed().nullable(),
    documentsAttach: yup.mixed<File>().nullable().default(null),
    resumeFile: yup.mixed<File>().nullable().default(null),
    certificates: yup.array(yup.mixed<File>()).default([]),
    preferredJobTitlesList: yup.array(yup.string().trim()).default([]),
    preferredLocationList: yup.array(yup.string().trim()).default([]),
    minimumSalaryExpectation: numericString("minimum-salary").default(""),
    maximumSalaryExpectation: numericString("maximum-salary")
      .default("")
      .test(
        "is-max-gte-min",
        "Maximum should be greater than or equal to minimum",
        function (value) {
          const minimum = this.parent.minimumSalaryExpectation;
          if (!value || !minimum) return true;
          return Number(value) >= Number(minimum);
        }
      ),
    profileSummary: yup
      .string()
      .max(4000, "Maximum 4000 characters allowed")
      .default(""),
  })
  .required();
