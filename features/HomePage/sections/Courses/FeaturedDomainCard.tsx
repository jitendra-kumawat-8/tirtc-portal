import Image from "next/image";
import { ArrowForwardRounded } from "@mui/icons-material";
import { useInterestFlow } from "../../../../context/InterestFlowContext";
import { makeInterestId } from "../../../../utils/interestId";
import { featuredDomainCards } from "./constants";

type DomainCard = (typeof featuredDomainCards)[number];

export function FeaturedDomainCard({ card }: { card: DomainCard }) {
  const { runShowInterest } = useInterestFlow();
  const id = makeInterestId("domain", String(card.id));

  return (
    <div
      id={id}
      className="rounded-2xl bg-white overflow-hidden flex flex-col h-full w-full"
      style={{
        border: "1.5px solid rgba(29,78,216,0.1)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(29,78,216,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div className="relative w-full h-40 flex-shrink-0 bg-background-muted">
        <Image
          src={card.image}
          alt={card.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1 min-h-0">
        <h3 className="text-sm font-semibold text-content-primary font-poppins leading-snug">{card.title}</h3>
        <p className="text-xs leading-relaxed text-content-secondary">{card.summary}</p>
        <p
          className="text-[11px] leading-relaxed text-content-muted flex-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {card.focus}
        </p>
        <button
          type="button"
          onClick={() =>
            runShowInterest({
              id,
              title: card.title,
              jobId: String(card.id),
              jobType: "TRAINING",
            })
          }
          className="btn-transition self-start inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full mt-auto"
          style={{ background: "#1D4ED8", color: "white" }}
        >
          Show Interest <ArrowForwardRounded style={{ fontSize: 13 }} />
        </button>
      </div>
    </div>
  );
}
