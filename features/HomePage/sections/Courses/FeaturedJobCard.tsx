import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { jobCards } from "./constants";
import { JobInterestButton } from "./JobInterestButton";
import { makeInterestId } from "../../../../utils/interestId";

export type FeaturedJobCardData = (typeof jobCards)[number];

type Props = {
  job: FeaturedJobCardData;
  className?: string;
};

export function FeaturedJobCard({ job, className = "" }: Props) {
  return (
    <div
      id={makeInterestId("job", String(job.id))}
      className={`job-card flex h-full min-h-0 w-full flex-1 cursor-default flex-col gap-5 rounded-2xl bg-white p-6 ${className}`}
      style={{
        border: `1.5px solid ${job.accent}25`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = job.hoverGradient;
        el.style.borderColor = "transparent";
        el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.15)";
        el.querySelectorAll<HTMLElement>(".jc-title").forEach((n) => {
          n.style.color = "white";
        });
        el.querySelectorAll<HTMLElement>(".jc-text").forEach((n) => {
          n.style.color = "rgba(255,255,255,0.9)";
        });
        el.querySelectorAll<HTMLElement>(".jc-icon").forEach((n) => {
          n.style.color = "rgba(255,255,255,0.85)";
        });
        el.querySelectorAll<HTMLElement>(".jc-cta").forEach((n) => {
          n.style.borderColor = "rgba(255,255,255,0.5)";
          n.style.color = "white";
          n.style.background = "rgba(255,255,255,0.15)";
        });
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "white";
        el.style.borderColor = `${job.accent}25`;
        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
        el.querySelectorAll<HTMLElement>(".jc-title").forEach((n) => {
          n.style.color = job.accent;
        });
        el.querySelectorAll<HTMLElement>(".jc-text").forEach((n) => {
          n.style.color = "#475569";
        });
        el.querySelectorAll<HTMLElement>(".jc-icon").forEach((n) => {
          n.style.color = job.accent;
        });
        el.querySelectorAll<HTMLElement>(".jc-cta").forEach((n) => {
          n.style.borderColor = `${job.accent}40`;
          n.style.color = job.accent;
          n.style.background = "transparent";
        });
      }}
    >
      <h3
        className="jc-title text-base font-bold font-poppins leading-snug"
        style={{ color: job.accent, transition: "color 0.3s ease" }}
      >
        {job.title}
      </h3>

      <ul className="flex min-h-0 flex-1 flex-col gap-2">
        {job.highlights.map((line) => (
          <li key={line} className="flex items-start gap-2.5">
            <CheckCircleOutlineRounded
              className="jc-icon flex-shrink-0 mt-0.5"
              style={{ fontSize: 15, color: job.accent, transition: "color 0.3s ease" }}
            />
            <span
              className="jc-text text-xs leading-relaxed"
              style={{ color: "#475569", transition: "color 0.3s ease" }}
            >
              {line}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto shrink-0">
        <JobInterestButton jobTitle={job.title} jobId={job.id} accent={job.accent} />
      </div>
    </div>
  );
}
