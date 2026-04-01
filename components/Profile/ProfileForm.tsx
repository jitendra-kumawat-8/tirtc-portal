import { useEffect, useMemo, useRef } from "react";
import { FormLabel, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import HFAutocomplete from "../HFComponents/HFAutocomplete";
import HFCheckboxes from "../HFComponents/HFCheckboxes";
import HFDatePicker from "../HFComponents/HFDatePicker";
import HFDocumentUpload from "../HFComponents/HFDocumentUpload";
import HFMultipleDocumentUpload from "../HFComponents/HFMultipleDocumentUpload";
import HFMultiSelectAutocomplete from "../HFComponents/HFMultiSelectAutocomplete";
import HFTextField from "../HFComponents/HFTextField";
import {
  fetchCityList,
  fetchCountryList,
  fetchCountryOfCitizenshipList,
  fetchHighestQualificationCategoryList,
  fetchHighestQualificationSubCategoryList,
  fetchJobRoleList,
  fetchJobSkillList,
  fetchLicenseTypeList,
  fetchStateList,
} from "../../services/commonServices";

const CURRENT_LOCATION_OPTIONS = [
  { label: "Bangalore", value: "Bangalore" },
  { label: "Mumbai", value: "Mumbai" },
  { label: "Delhi", value: "Delhi" },
  { label: "Chennai", value: "Chennai" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Kolkata", value: "Kolkata" },
  { label: "Pune", value: "Pune" },
  { label: "Jaipur", value: "Jaipur" },
  { label: "Ahmedabad", value: "Ahmedabad" },
  { label: "Surat", value: "Surat" },
];

const WORK_STATUS_OPTIONS = [
  { value: "Employed", label: "Employed" },
  { value: "Fresher", label: "Fresher" },
  { value: "Un Employed", label: "Un Employed" },
  { value: "Actively Looking", label: "Actively Looking" },
];

const SOURCE_OPTIONS = [
  { label: "Job Fair / Job Drive", value: "Job Fair / Job Drive" },
  { label: "Website", value: "Website" },
  {
    label: "Institution Placement Cell",
    value: "Institution Placement Cell",
  },
  { label: "Recruiter/Mobiliser", value: "Recruiter/Mobiliser" },
  { label: "Job Portal", value: "Job Portal" },
  { label: "Employment Exchange", value: "Employment Exchange" },
  { label: "Social Media", value: "Social Media" },
];

const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Transgender", value: "Transgender" },
];

const YES_NO_OPTIONS = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const PREFERRED_LOCATION_OPTIONS = [
  { label: "Indian States", value: "Indian States" },
  { label: "Capital & Major Cities", value: "Capital & Major Cities" },
  { label: "Anywhere in India", value: "Anywhere in India" },
  { label: "Overseas", value: "Overseas" },
];

const EXPERIENCE_YEAR_OPTIONS = Array.from({ length: 31 }, (_, index) => ({
  label: `${index} ${index === 1 ? "Year" : "Years"}`,
  value: String(index),
}));

const EXPERIENCE_MONTH_OPTIONS = Array.from({ length: 12 }, (_, index) => ({
  label: `${index} ${index === 1 ? "Month" : "Months"}`,
  value: String(index),
}));

export interface ProfileFormValues {
  fullName: string;
  dateOfBirth: any;
  contactNumber: string;
  email: string;
  nationality: string;
  address: string;
  country: string;
  state: string;
  district: string;
  pincode: string;
  gender: string;
  aadharCardNo: string;
  fatherName: string;
  sourceOfCandidate: string;
  workStatus: string[];
  linkedInProfile: string;
  totalExperienceYears: string;
  totalExperienceMonths: string;
  currentAddress: string;
  currentSalary: string;
  keySkillsList: string[];
  nameOfCollege: string;
  typeOfLicense: string;
  validityOfLicense: any;
  highestQualificationCategory: string;
  highestQualificationSubCategory: string;
  otherHighestQualification: string;
  countryOfCitizenship: string;
  haveWorkPermit: string;
  haveValidPassport: string;
  validityOfPassport: any;
  documentsAttach: File | null;
  resumeFile: File | null;
  certificates: File[];
  preferredJobTitlesList: string[];
  preferredLocationList: string[];
  minimumSalaryExpectation: string;
  maximumSalaryExpectation: string;
  profileSummary: string;
}

interface ProfileFormProps {
  uploadedDocument?: string;
  uploadedResume?: string | null;
  uploadedCertificates?: string[];
}

const toOptionItems = (items?: Array<{ text: string; value: string }>) =>
  items?.map((item) => ({
    label: item.text,
    value: item.value,
  })) || [];

export default function ProfileForm({
  uploadedDocument,
  uploadedResume,
  uploadedCertificates,
}: ProfileFormProps) {
  const { setValue, watch } = useFormContext<ProfileFormValues>();
  const selectedCountry = watch("country");
  const selectedState = watch("state");
  const selectedCategory = watch("highestQualificationCategory");

  const { data: countriesList } = useQuery({
    queryKey: ["countriesList"],
    queryFn: fetchCountryList,
  });

  const selectedCountryId = useMemo(
    () =>
      countriesList?.data?.find((item) => item.countryName === selectedCountry)
        ?.countryId,
    [countriesList?.data, selectedCountry]
  );

  const { data: statesList } = useQuery({
    queryKey: ["statesList", selectedCountryId],
    queryFn: () => fetchStateList(selectedCountryId!),
    enabled: !!selectedCountryId,
  });

  const selectedStateId = useMemo(
    () =>
      statesList?.data?.find((item) => item.stateName === selectedState)?.stateId,
    [selectedState, statesList?.data]
  );

  const { data: citiesList } = useQuery({
    queryKey: ["citiesList", selectedStateId],
    queryFn: () => fetchCityList(selectedStateId!),
    enabled: !!selectedStateId,
  });

  const { data: jobRolesList } = useQuery({
    queryKey: ["jobRolesList"],
    queryFn: fetchJobRoleList,
  });

  const { data: keySkillsList } = useQuery({
    queryKey: ["jobSkillsList"],
    queryFn: fetchJobSkillList,
  });

  const { data: licenseTypeList } = useQuery({
    queryKey: ["licenseTypeList"],
    queryFn: fetchLicenseTypeList,
  });

  const { data: qualificationCategories } = useQuery({
    queryKey: ["qualificationCategories"],
    queryFn: fetchHighestQualificationCategoryList,
  });

  const { data: qualificationSubCategories } = useQuery({
    queryKey: ["qualificationSubCategories", selectedCategory],
    queryFn: () => fetchHighestQualificationSubCategoryList(selectedCategory),
    enabled: !!selectedCategory,
  });

  const { data: citizenshipList } = useQuery({
    queryKey: ["countryOfCitizenshipList"],
    queryFn: fetchCountryOfCitizenshipList,
  });

  const previousCountryRef = useRef(selectedCountry);
  const previousStateRef = useRef(selectedState);
  const previousCategoryRef = useRef(selectedCategory);

  useEffect(() => {
    if (
      previousCountryRef.current !== undefined &&
      previousCountryRef.current !== selectedCountry
    ) {
      setValue("state", "");
      setValue("district", "");
    }
    previousCountryRef.current = selectedCountry;
  }, [selectedCountry, setValue]);

  useEffect(() => {
    if (
      previousStateRef.current !== undefined &&
      previousStateRef.current !== selectedState
    ) {
      setValue("district", "");
    }
    previousStateRef.current = selectedState;
  }, [selectedState, setValue]);

  useEffect(() => {
    if (
      previousCategoryRef.current !== undefined &&
      previousCategoryRef.current !== selectedCategory
    ) {
      setValue("highestQualificationSubCategory", "");
    }
    previousCategoryRef.current = selectedCategory;
  }, [selectedCategory, setValue]);

  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} md={6}>
        <HFTextField
          name="fullName"
          label="Full Name (As per Aadhar) *"
          placeholder="Enter your full name as per Aadhar"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFDatePicker
          name="dateOfBirth"
          label="Date of Birth *"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="contactNumber"
          label="Contact Number *"
          placeholder="Enter your contact number"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="email"
          label="Email *"
          placeholder="Enter your email"
          labelVariant="medium"
          disabled
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="nationality"
          label="Country of Nationality *"
          placeholder="Select your nationality"
          options={
            countriesList?.data?.map((country) => ({
              label: country.countryName,
              value: country.countryName,
            })) || []
          }
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="address"
          label="Address *"
          placeholder="Enter your address"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <HFAutocomplete
          name="country"
          label="Country"
          placeholder="Select your country"
          options={
            countriesList?.data?.map((country) => ({
              label: country.countryName,
              value: country.countryName,
            })) || []
          }
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <HFAutocomplete
          name="state"
          label="State"
          placeholder="Select your state"
          options={
            statesList?.data?.map((state) => ({
              label: state.stateName,
              value: state.stateName,
            })) || []
          }
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <HFAutocomplete
          name="district"
          label="District / City"
          placeholder="Select your district / city"
          options={
            citiesList?.data?.map((city) => ({
              label: city.cityName,
              value: city.cityName,
            })) || []
          }
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="pincode"
          label="Pincode"
          placeholder="Enter your pincode"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="gender"
          label="Gender *"
          placeholder="Select your gender"
          options={GENDER_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="aadharCardNo"
          label="National Identifier No / Aadhar No"
          placeholder="Enter your Aadhar number"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="fatherName"
          label="Father's Name (As per Aadhar) *"
          placeholder="Enter your father's name as per Aadhar"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="sourceOfCandidate"
          label="Where did you hear about CII Job Connect? *"
          placeholder="Select source"
          options={SOURCE_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFCheckboxes
          name="workStatus"
          label="Work Status *"
          options={WORK_STATUS_OPTIONS}
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12}>
        <HFTextField
          name="linkedInProfile"
          label="LinkedIn Profile"
          placeholder="Enter your LinkedIn URL"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <div className="flex flex-col gap-2">
          <FormLabel className="text-[#4B5563] font-inter font-semibold text-base">
            Total Experience *
          </FormLabel>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <HFAutocomplete
                name="totalExperienceYears"
                placeholder="Select Year"
                options={EXPERIENCE_YEAR_OPTIONS}
                labelVariant="medium"
                storeOptionType="string"
              />
            </Grid>
            <Grid item xs={6}>
              <HFAutocomplete
                name="totalExperienceMonths"
                placeholder="Select Month"
                options={EXPERIENCE_MONTH_OPTIONS}
                labelVariant="medium"
                storeOptionType="string"
              />
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="currentAddress"
          label="Current Location"
          placeholder="Select location"
          options={CURRENT_LOCATION_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="currentSalary"
          label="Current Annual CTC (INR)"
          placeholder="Eg. 450000"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFMultiSelectAutocomplete
          name="keySkillsList"
          label="Key Skills"
          options={toOptionItems(keySkillsList?.data)}
          placeholder="Select skills"
          variant="medium"
          creatable
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="nameOfCollege"
          label="College / University Name"
          placeholder="Enter college/university name"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="typeOfLicense"
          label="Type of License (Non Mandatory)"
          placeholder="Select license type"
          options={toOptionItems(licenseTypeList?.data)}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFDatePicker
          name="validityOfLicense"
          label="Validity of License"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="highestQualificationCategory"
          label="Highest Qualification Category"
          placeholder="Select qualification category"
          options={toOptionItems(qualificationCategories?.data)}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="highestQualificationSubCategory"
          label="Highest Qualification Sub Category"
          placeholder="Select qualification sub category"
          options={toOptionItems(qualificationSubCategories?.data)}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="otherHighestQualification"
          label="Other Highest Qualification"
          placeholder="Enter other qualification details"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="countryOfCitizenship"
          label="Country of Citizenship"
          placeholder="Select country of citizenship"
          options={toOptionItems(citizenshipList?.data)}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="haveWorkPermit"
          label="Have Work Permit"
          placeholder="Select work permit status"
          options={YES_NO_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="haveValidPassport"
          label="Have Valid Passport"
          placeholder="Select passport validity"
          options={YES_NO_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFDatePicker
          name="validityOfPassport"
          label="Validity of Passport"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <div className="flex flex-col gap-2">
          <HFDocumentUpload
            name="documentsAttach"
            label="Attach Document"
            labelVariant="medium"
            existingDocument={uploadedDocument}
            onChange={(event) => {
              const file = event.target.files?.[0] || null;
              setValue("documentsAttach", file);
            }}
          />
          {uploadedDocument ? (
            <Typography
              variant="body2"
              className="text-[#64748B] cursor-pointer"
              onClick={() => window.open(uploadedDocument, "_blank")}
            >
              View uploaded document
            </Typography>
          ) : null}
        </div>
      </Grid>

      <Grid item xs={12} md={4}>
        <div className="flex flex-col gap-2">
          <HFDocumentUpload
            name="resumeFile"
            label="Upload Your Resume"
            labelVariant="medium"
            existingDocument={uploadedResume || undefined}
            onChange={(event) => {
              const file = event.target.files?.[0] || null;
              setValue("resumeFile", file);
            }}
          />
          {uploadedResume ? (
            <Typography
              variant="body2"
              className="text-[#64748B] cursor-pointer"
              onClick={() => window.open(uploadedResume, "_blank")}
            >
              View uploaded resume
            </Typography>
          ) : null}
        </div>
      </Grid>

      <Grid item xs={12} md={4}>
        <div className="flex flex-col gap-2">
          <HFMultipleDocumentUpload
            name="certificates"
            label="Upload Certificate / Document"
            labelVariant="medium"
            onChange={(files) => setValue("certificates", files)}
          />
          {uploadedCertificates?.length ? (
            <div className="flex flex-col gap-1">
              {uploadedCertificates.map((certificate, index) => (
                <Typography
                  key={`${certificate}-${index}`}
                  variant="body2"
                  className="text-[#64748B] cursor-pointer"
                  onClick={() => window.open(certificate, "_blank")}
                >
                  View certificate {index + 1}
                </Typography>
              ))}
            </div>
          ) : null}
        </div>
      </Grid>

      <Grid item xs={12}>
        <div className="flex flex-col gap-2">
          <FormLabel className="text-[#4B5563] font-inter font-semibold text-base">
            Job Preferences
          </FormLabel>
          <Grid container spacing={2.5}>
            <Grid item xs={12} md={4}>
              <HFMultiSelectAutocomplete
                name="preferredJobTitlesList"
                options={toOptionItems(jobRolesList?.data)}
                placeholder="Type here"
                variant="medium"
                label="Preferred Job Titles"
                creatable
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <HFMultiSelectAutocomplete
                name="preferredLocationList"
                label="Preferred Location"
                options={PREFERRED_LOCATION_OPTIONS}
                placeholder="Select location"
                variant="medium"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="flex flex-col gap-2">
                <FormLabel className="text-[#4B5563] font-inter font-semibold text-base">
                  Expected Annual (CTC) in INR
                </FormLabel>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <HFTextField
                      name="minimumSalaryExpectation"
                      placeholder="Minimum"
                      labelVariant="medium"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <HFTextField
                      name="maximumSalaryExpectation"
                      placeholder="Maximum"
                      labelVariant="medium"
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12}>
        <HFTextField
          name="profileSummary"
          label="Profile Summary"
          placeholder="Type here"
          multiline
          rows={4}
          labelVariant="medium"
        />
      </Grid>
    </Grid>
  );
}
