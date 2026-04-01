import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import ProfileForm, { ProfileFormValues } from "../components/Profile/ProfileForm";
import { useAuth } from "./AuthContext";
import {
  clearPendingInterest,
  readPendingInterest,
  writePendingInterest,
} from "../constants/interestFlow";
import { getProfile, updateProfile } from "../services/authService";
import { isProfileComplete } from "../utils/profileComplete";
import {
  PROFILE_FORM_DEFAULTS,
  mapProfileToFormValues,
} from "../utils/profileFormMapping";
import { profileFormSchema } from "../utils/profileFormSchema";
import type { UserProfile } from "../types/api";

type InterestTarget = { id: string; title: string };

type InterestFlowCtx = {
  runShowInterest: (target: InterestTarget) => void;
};

type GetProfileResponseShape =
  | UserProfile
  | {
    data?: UserProfile | { data?: UserProfile };
    status?: boolean;
    msg?: string;
  };

const InterestFlowContext = createContext<InterestFlowCtx | undefined>(undefined);

const extractProfileFromResponse = (
  response: GetProfileResponseShape
): UserProfile | null => {
  if (!response || typeof response !== "object") {
    return null;
  }

  if ("userId" in response) {
    return response as UserProfile;
  }

  if ("data" in response && response.data && typeof response.data === "object") {
    if ("userId" in response.data) {
      return response.data as UserProfile;
    }

    if (
      "data" in response.data &&
      response.data.data &&
      typeof response.data.data === "object" &&
      "userId" in response.data.data
    ) {
      return response.data.data as UserProfile;
    }
  }

  return null;
};

export function InterestFlowProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, isAuthReady, accessToken, user, refetchUser } =
    useAuth();

  const methods = useForm<ProfileFormValues>({
    defaultValues: PROFILE_FORM_DEFAULTS,
    resolver: yupResolver(profileFormSchema) as any,
    mode: "onBlur",
  });

  const { reset, handleSubmit } = methods;

  const [modalOpen, setModalOpen] = useState(false);
  const [interestTitle, setInterestTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [profileUser, setProfileUser] = useState<UserProfile | null>(null);

  const openProfileModal = useCallback(
    (profile: UserProfile, title: string) => {
      setInterestTitle(title);
      setProfileUser(profile);
      reset(mapProfileToFormValues(profile));
      setModalOpen(true);
    },
    [reset]
  );

  const closeProfileModal = useCallback(() => {
    if (submitting) return;
    setModalOpen(false);
    setProfileUser(null);
    reset(PROFILE_FORM_DEFAULTS);
  }, [reset, submitting]);

  const finalizeInterestCheck = useCallback(
    async (title: string) => {
      if (!accessToken) return;

      try {
        const response = await getProfile();
        const profile = extractProfileFromResponse(
          response as GetProfileResponseShape
        );

        if (!profile) {
          throw new Error("Invalid profile response shape");
        }

        setProfileUser(profile);
        await refetchUser();

        if (isProfileComplete(profile)) {
          enqueueSnackbar("Interest captured successfully", {
            variant: "success",
          });
          return;
        }

        openProfileModal(profile, title);
      } catch (error) {
        console.error("Could not verify profile:", error);
        enqueueSnackbar("Could not verify your profile. Please try again.", {
          variant: "error",
        });
      }
    },
    [accessToken, refetchUser, openProfileModal]
  );

  const runShowInterest = useCallback(
    (target: InterestTarget) => {
      if (!isAuthenticated) {
        if (typeof window !== "undefined") {
          writePendingInterest({
            id: target.id,
            title: target.title,
            returnPath: window.location.pathname + window.location.search,
          });
        }

        void router.push("/login");
        return;
      }

      void finalizeInterestCheck(target.title);
    },
    [isAuthenticated, router, finalizeInterestCheck]
  );

  useEffect(() => {
    if (!isAuthReady || !isAuthenticated || !router.isReady) return;

    const pending = readPendingInterest();
    if (!pending) return;

    const raw =
      typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
    const hash = raw ? decodeURIComponent(raw) : "";

    if (hash !== pending.id) return;

    const pathOnly = pending.returnPath.split("?")[0];
    if (router.pathname !== pathOnly) return;

    window.requestAnimationFrame(() => {
      document.getElementById(pending.id)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });

    const t = window.setTimeout(() => {
      clearPendingInterest();
      void finalizeInterestCheck(pending.title);
    }, 450);

    return () => window.clearTimeout(t);
  }, [
    isAuthReady,
    isAuthenticated,
    router.isReady,
    router.asPath,
    router.pathname,
    finalizeInterestCheck,
  ]);

  const handleModalSubmit = handleSubmit(async (values) => {
    const uid = profileUser?.userId || user?.userId;

    if (!uid) {
      enqueueSnackbar("You must be signed in to continue.", {
        variant: "error",
      });
      return;
    }

    setSubmitting(true);

    try {
      const res = await updateProfile({
        userId: uid,
        fullName: values.fullName.trim(),
        dateOfBirth: values.dateOfBirth
          ? dayjs(values.dateOfBirth).format("YYYY-MM-DD")
          : undefined,
        contactNumber: values.contactNumber.trim(),
        email: values.email.trim(),
        nationality: values.nationality?.trim() || undefined,
        address: values.address?.trim() || undefined,
        country: values.country || undefined,
        state: values.state || undefined,
        district: values.district || undefined,
        pincode: values.pincode?.trim() || undefined,
        gender: values.gender || undefined,
        aadharCardNo: values.aadharCardNo?.trim() || undefined,
        fatherName: values.fatherName?.trim() || undefined,
        sourceOfCandidate: values.sourceOfCandidate || undefined,
        workStatus: values.workStatus.length
          ? values.workStatus.join(",")
          : undefined,
        linkedInProfile: values.linkedInProfile?.trim() || undefined,
        totalExperienceYears: values.totalExperienceYears || undefined,
        totalExperienceMonths: values.totalExperienceMonths || undefined,
        currentAddress: values.currentAddress || undefined,
        currentSalary: values.currentSalary?.trim() || undefined,
        keySkillsList: values.keySkillsList.length
          ? JSON.stringify(values.keySkillsList)
          : undefined,
        nameOfCollege: values.nameOfCollege?.trim() || undefined,
        typeOfLicense: values.typeOfLicense || undefined,
        validityOfLicense: values.validityOfLicense
          ? dayjs(values.validityOfLicense).format("YYYY-MM-DD")
          : undefined,
        highestQualificationCategory:
          values.highestQualificationCategory || undefined,
        highestQualificationSubCategory:
          values.highestQualificationSubCategory || undefined,
        otherHighestQualification:
          values.otherHighestQualification?.trim() || undefined,
        countryOfCitizenship: values.countryOfCitizenship || undefined,
        haveWorkPermit: values.haveWorkPermit || undefined,
        haveValidPassport: values.haveValidPassport || undefined,
        validityOfPassport: values.validityOfPassport
          ? dayjs(values.validityOfPassport).format("YYYY-MM-DD")
          : undefined,
        documentsAttach: values.documentsAttach || undefined,
        resumeFile: values.resumeFile || undefined,
        certificates: values.certificates.length
          ? values.certificates
          : undefined,
        preferredJobTitlesList: values.preferredJobTitlesList.length
          ? JSON.stringify(values.preferredJobTitlesList)
          : undefined,
        preferredLocationList: values.preferredLocationList.length
          ? JSON.stringify(values.preferredLocationList)
          : undefined,
        minimumSalaryExpectation:
          values.minimumSalaryExpectation?.trim() || undefined,
        maximumSalaryExpectation:
          values.maximumSalaryExpectation?.trim() || undefined,
        profileSummary: values.profileSummary?.trim() || undefined,
      });

      if (!res?.status) {
        enqueueSnackbar(res?.msg || "Could not save profile.", {
          variant: "error",
        });
        return;
      }

      await refetchUser();
      setModalOpen(false);
      setProfileUser(null);
      reset(PROFILE_FORM_DEFAULTS);

      enqueueSnackbar("Interest captured successfully", {
        variant: "success",
      });
    } catch (error) {
      console.error("Could not save profile:", error);
      enqueueSnackbar("Could not save profile. Please try again.", {
        variant: "error",
      });
    } finally {
      setSubmitting(false);
    }
  });

  const value: InterestFlowCtx = useMemo(
    () => ({ runShowInterest }),
    [runShowInterest]
  );

  return (
    <InterestFlowContext.Provider value={value}>
      {children}

      <Dialog
        open={modalOpen}
        onClose={closeProfileModal}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 2,
            height: "min(90vh, 880px)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          },
        }}
      >
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleModalSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              minHeight: 0,
            }}
          >
            <DialogTitle
              sx={{
                fontFamily: "Poppins, sans-serif",
                pb: 0,
                flexShrink: 0,
                position: "sticky",
                top: 0,
                zIndex: 2,
                bgcolor: "background.paper",
              }}
            >
              Complete your profile
            </DialogTitle>

            <DialogContent
              dividers
              sx={{
                flex: 1,
                minHeight: 0,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                pt: 2,
                pb: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  pb: 3,
                }}
              >
                We need your details to record your interest in{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {interestTitle}
                </Box>
                .
              </Typography>

              <ProfileForm
                uploadedDocument={profileUser?.documentAttachList?.[0]}
                uploadedResume={profileUser?.resume || null}
                uploadedCertificates={profileUser?.certificateList || []}
              />
            </DialogContent>

            <DialogActions
              sx={{
                position: "sticky",
                bottom: 0,
                zIndex: 2,
                px: 3,
                py: 2,
                gap: 1,
                flexShrink: 0,
                borderTop: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                boxShadow: "0px -2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <Button
                type="button"
                onClick={closeProfileModal}
                disabled={submitting}
              >
                Cancel
              </Button>

              <Button type="submit" variant="contained" disabled={submitting}>
                {submitting ? "Saving…" : "Save & submit interest"}
              </Button>
            </DialogActions>
          </Box>
        </FormProvider>
      </Dialog>
    </InterestFlowContext.Provider>
  );
}

export function useInterestFlow() {
  const ctx = useContext(InterestFlowContext);

  if (!ctx) {
    throw new Error("useInterestFlow must be used within InterestFlowProvider");
  }

  return ctx;
}
