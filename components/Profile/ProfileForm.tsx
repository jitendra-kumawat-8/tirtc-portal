import { Grid } from "@mui/material";
import HFAutocomplete from "../HFComponents/HFAutocomplete";
import HFDatePicker from "../HFComponents/HFDatePicker";
import HFMultiSelectAutocomplete from "../HFComponents/HFMultiSelectAutocomplete";
import HFTextField from "../HFComponents/HFTextField";
import {
  PROFILE_COUNTRY_OPTIONS,
  PROFILE_GENDER_OPTIONS,
  PROFILE_PREFERRED_LOCATION_OPTIONS,
  PROFILE_SKILL_OPTIONS,
  PROFILE_WORK_STATUS_OPTIONS,
} from "../../constants/profileOptions";

export interface ProfileFormValues {
  fullName: string;
  email: string;
  contactNumber: string;
  dateOfBirth: any;
  nationality: string;
  gender: string;
  workStatus: string;
  linkedInProfile: string;
  address: string;
  country: string;
  state: string;
  district: string;
  pincode: string;
  keySkillsList: string[];
  highestEducation: string;
  preferredLocationList: string[];
  profileSummary: string;
}

export default function ProfileForm() {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} md={6}>
        <HFTextField
          name="fullName"
          label="Full Name *"
          placeholder="Enter your full name"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFTextField
          name="email"
          label="Email *"
          placeholder="Enter your email"
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
        <HFAutocomplete
          name="workStatus"
          label="Work Status *"
          placeholder="Select work status"
          options={PROFILE_WORK_STATUS_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFDatePicker
          name="dateOfBirth"
          label="Date of Birth"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="nationality"
          label="Nationality *"
          placeholder="Select nationality"
          options={PROFILE_COUNTRY_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFAutocomplete
          name="gender"
          label="Gender"
          placeholder="Select gender"
          options={PROFILE_GENDER_OPTIONS}
          labelVariant="medium"
          storeOptionType="string"
        />
      </Grid>

      <Grid item xs={12}>
        <HFTextField
          name="linkedInProfile"
          label="LinkedIn Profile"
          placeholder="https://www.linkedin.com/in/your-profile"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12}>
        <HFTextField
          name="address"
          label="Address"
          placeholder="Enter your address"
          labelVariant="medium"
          multiline
          rows={3}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <HFTextField
          name="country"
          label="Country"
          placeholder="Enter your country"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <HFTextField
          name="state"
          label="State"
          placeholder="Enter your state"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <HFTextField
          name="district"
          label="City"
          placeholder="Enter your city"
          labelVariant="medium"
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
        <HFTextField
          name="highestEducation"
          label="Highest Education"
          placeholder="Enter your highest education"
          labelVariant="medium"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFMultiSelectAutocomplete
          name="keySkillsList"
          label="Key Skills"
          options={PROFILE_SKILL_OPTIONS}
          placeholder="Select or type skills"
          variant="medium"
          creatable
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <HFMultiSelectAutocomplete
          name="preferredLocationList"
          label="Preferred Locations"
          options={PROFILE_PREFERRED_LOCATION_OPTIONS}
          placeholder="Select preferred locations"
          variant="medium"
          creatable
        />
      </Grid>

      <Grid item xs={12}>
        <HFTextField
          name="profileSummary"
          label="Profile Summary"
          placeholder="Write a short summary about your background and goals"
          labelVariant="medium"
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
}