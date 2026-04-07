import { ArrowForwardRounded } from "@mui/icons-material";
import { useInterestFlow } from "../../../../context/InterestFlowContext";
import { makeInterestId } from "../../../../utils/interestId";

export function JobInterestButton({
  jobTitle,
  jobId,
  accent,
}: {
  jobTitle: string;
  jobId: number;
  accent: string;
}) {
  const { runShowInterest } = useInterestFlow();
  const id = makeInterestId("job", String(jobId));
  return (
    <button
      type="button"
      onClick={() =>
        runShowInterest({
          id,
          title: jobTitle,
          jobId: String(jobId),
          jobType: "JOB",
        })
      }
      className="jc-cta btn-transition self-start inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full"
      style={{
        border: `1.5px solid ${accent}40`,
        color: accent,
        background: "transparent",
        transition: "all 0.3s ease",
      }}
    >
      Show Interest <ArrowForwardRounded className="jc-cta-icon" style={{ fontSize: 13 }} />
    </button>
  );
}
