import Link from "next/link";
import { ConstructionRounded } from "@mui/icons-material";
import PortalShell from "../components/PortalShell";

export default function MaintenancePage() {
  return (
    <PortalShell
      title="Under maintenance | TIRTC"
      eyebrow="Employer Flow"
      heading="Under maintenance"
      description="The employer portal is temporarily unavailable while we improve it. Please check back soon, or contact TIRTC for workforce partnership enquiries."
      showApplyCta={false}
    >
      <div className="flex max-w-2xl flex-col items-center justify-center gap-6 rounded-2xl border border-slate-200/90 bg-background-primary px-6 py-8 shadow-sm md:px-10 md:py-10">
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <ConstructionRounded
            className="flex-shrink-0 text-secondary-500"
            sx={{ fontSize: 40 }}
            aria-hidden
          />
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold leading-snug text-content-primary">
              Employer login is under maintenance
            </p>
            <p className="text-base leading-relaxed text-content-secondary">
              Candidate registration and training programmes are unaffected. We will enable employer
              sign-in here when the portal is ready.
            </p>
            <Link
              href="/"
              className="w-fit text-sm font-semibold text-primary-700 underline-offset-4 hover:underline"
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}
