import Image from "next/image";
import { Chip } from "@mui/material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { industryPartners } from "./constants";

const collaborators = [
  "Department of Telecommunications",
  "BRBRAITT (Academic Institution)",
];

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10">

        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Industry Partners
          </span>
          <p className="text-base" style={{ color: "#475569" }}>
            Supported by leading telecom and technology companies in collaboration with:
          </p>
          <ul className="flex flex-col gap-2">
            {collaborators.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircleOutlineRounded style={{ fontSize: 18, color: "#1D4ED8" }} />
                <span className="text-sm font-medium text-content-primary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* CII — anchor card */}
          <div
            className="rounded-2xl bg-white flex flex-col items-center justify-center gap-3 py-6 px-4"
            style={{ border: "2px solid #1D4ED8" }}
          >
            <Image
              src="/logo/Mask group.png"
              alt="Confederation of Indian Industry"
              width={96}
              height={56}
              style={{ objectFit: "contain" }}
            />
            <Chip label="Anchor Partner" size="small" sx={{ bgcolor: "rgba(29,78,216,0.08)", color: "#1D4ED8", fontWeight: 600 }} />
          </div>

          {industryPartners.map((partner) => (
            <div
              key={partner}
              className="rounded-2xl bg-white flex items-center justify-center py-5 px-4 text-center hover:shadow-md transition-shadow duration-200 cursor-default"
              style={{ border: "1.5px solid rgba(29,78,216,0.12)" }}
            >
              <span className="text-sm font-semibold text-content-primary font-poppins">{partner}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
