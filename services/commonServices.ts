import apiClient from "./api";
import type {
  CityListResponse,
  CountryListResponse,
  CountryOfCitizenshipListResponse,
  HighestQualificationCategoryListResponse,
  HighestQualificationSubCategoryListResponse,
  JobRoleListResponse,
  JobSkillListResponse,
  LicenseTypeListResponse,
  StateListResponse,
} from "../types/api";

export async function fetchCountryList(): Promise<CountryListResponse> {
  const response = await apiClient.post<CountryListResponse>("/getcountry");
  return response.data;
}

export async function fetchStateList(
  countryId: string
): Promise<StateListResponse> {
  const response = await apiClient.post<StateListResponse>("/getstate", {
    CountryId: countryId,
  });
  return response.data;
}

export async function fetchCityList(stateId: string): Promise<CityListResponse> {
  const response = await apiClient.post<CityListResponse>("/getcity", {
    StateId: stateId,
  });
  return response.data;
}

export async function fetchJobRoleList(): Promise<JobRoleListResponse> {
  const response = await apiClient.get<JobRoleListResponse>("/getjobrolelist");
  return response.data;
}

export async function fetchJobSkillList(): Promise<JobSkillListResponse> {
  const response = await apiClient.get<JobSkillListResponse>("/getjobskilllist");
  return response.data;
}

export async function fetchLicenseTypeList(): Promise<LicenseTypeListResponse> {
  const response = await apiClient.get<LicenseTypeListResponse>("/getlicencetype");
  return response.data;
}

export async function fetchCountryOfCitizenshipList(): Promise<CountryOfCitizenshipListResponse> {
  const response = await apiClient.get<CountryOfCitizenshipListResponse>(
    "/getcountryofcitizenship"
  );
  return response.data;
}

export async function fetchHighestQualificationCategoryList(): Promise<HighestQualificationCategoryListResponse> {
  const response =
    await apiClient.get<HighestQualificationCategoryListResponse>(
      "/gethighestqualificationcategory"
    );
  return response.data;
}

export async function fetchHighestQualificationSubCategoryList(
  category?: string
): Promise<HighestQualificationSubCategoryListResponse> {
  const response =
    await apiClient.get<HighestQualificationSubCategoryListResponse>(
      "/gethighestqualificationsubcategory",
      {
        params: category ? { category } : {},
      }
    );
  return response.data;
}
