import { Chip } from "@mui/material";

const demandRoles = [
  "Network & field engineers",
  "Cybersecurity specialists",
  "Data centre & cloud professionals",
  "Optimisation & automation experts",
];

export default function Background() {
  return (
    <section id="background" className="bg-white py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-6 ">

          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Background
          </span>

          <p className="text-lg text-content-primary leading-[1.8]">
            India&apos;s telecom ecosystem is undergoing a rapid transition toward AI-driven, cloud-based,
            software-defined and secure 5G/6G-ready infrastructure.
          </p>

          <p className="text-base text-content-secondary leading-[1.8]">
            This transformation is creating a strong demand for skilled professionals across roles such as:
          </p>

          <div className="flex flex-wrap gap-2">
            {demandRoles.map((role) => (
              <Chip
                key={role}
                label={role}
                variant="outlined"
                sx={{
                  borderColor: "rgba(29,78,216,0.2)",
                  color: "#1D4ED8",
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  "&:hover": { backgroundColor: "rgba(29,78,216,0.04)" },
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              />
            ))}
          </div>

          <p className="text-base text-content-secondary leading-[1.8]">
            While industry investments are accelerating, the availability of job-ready, industry-aligned
            talent remains a critical constraint.
          </p>

          <p className="text-base text-content-primary leading-[1.8] font-medium" style={{ fontStyle: "italic" }}>
            To address this, CII is establishing TIRTC as a structured, scalable institutional model
            integrating training, innovation, and industry collaboration.
          </p>

        </div>
      </div>
    </section>
  );
}
