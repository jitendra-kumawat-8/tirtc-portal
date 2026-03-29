export const PROFILE_SKILL_OPTIONS = [
  { label: "Customer Support", value: "Customer Support" },
  { label: "Sales", value: "Sales" },
  { label: "Retail Operations", value: "Retail Operations" },
  { label: "Field Technician", value: "Field Technician" },
  { label: "Telecom Installation", value: "Telecom Installation" },
  { label: "MS Office", value: "MS Office" },
  { label: "Data Entry", value: "Data Entry" },
  { label: "Communication", value: "Communication" },
  { label: "Team Handling", value: "Team Handling" },
  { label: "Inventory Management", value: "Inventory Management" },
];

export const PROFILE_COUNTRY_OPTIONS = [
  { label: "India", value: "India" },
  { label: "United Arab Emirates", value: "United Arab Emirates" },
  { label: "Nepal", value: "Nepal" },
  { label: "Bangladesh", value: "Bangladesh" },
];

export const PROFILE_STATE_OPTIONS = [
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Delhi", value: "Delhi" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Gujarat", value: "Gujarat" },
];

export const PROFILE_CITY_OPTIONS: Record<
  string,
  { label: string; value: string }[]
> = {
  "Madhya Pradesh": [
    { label: "Jabalpur", value: "Jabalpur" },
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
  ],
  Maharashtra: [
    { label: "Mumbai", value: "Mumbai" },
    { label: "Pune", value: "Pune" },
    { label: "Nagpur", value: "Nagpur" },
  ],
  Delhi: [{ label: "New Delhi", value: "New Delhi" }],
  Karnataka: [
    { label: "Bengaluru", value: "Bengaluru" },
    { label: "Mysuru", value: "Mysuru" },
  ],
  Gujarat: [
    { label: "Ahmedabad", value: "Ahmedabad" },
    { label: "Surat", value: "Surat" },
  ],
};

export const PROFILE_GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

export const PROFILE_WORK_STATUS_OPTIONS = [
  { label: "Actively Looking", value: "Actively Looking" },
  { label: "Employed", value: "Employed" },
  { label: "Fresher", value: "Fresher" },
  { label: "Un Employed", value: "Un Employed" },
];

export const PROFILE_EDUCATION_OPTIONS = [
  { label: "10th Pass", value: "10th Pass" },
  { label: "12th Pass", value: "12th Pass" },
  { label: "ITI", value: "ITI" },
  { label: "Diploma", value: "Diploma" },
  { label: "Graduate", value: "Graduate" },
  { label: "Post Graduate", value: "Post Graduate" },
];

export const PROFILE_PREFERRED_LOCATION_OPTIONS = [
  { label: "Jabalpur", value: "Jabalpur" },
  { label: "Bhopal", value: "Bhopal" },
  { label: "Indore", value: "Indore" },
  { label: "Delhi NCR", value: "Delhi NCR" },
  { label: "Mumbai", value: "Mumbai" },
  { label: "Bengaluru", value: "Bengaluru" },
  { label: "Anywhere in India", value: "Anywhere in India" },
];
