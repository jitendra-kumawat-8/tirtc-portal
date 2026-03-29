import { ApartmentRounded, EmailRounded, PhoneRounded } from "@mui/icons-material";
import { BG_TINTED_1 } from "../../backgrounds";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden"
      style={{ background: BG_TINTED_1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28 flex flex-col gap-10">

        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Contact Us
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — address */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(29,78,216,0.07)" }}>
                <ApartmentRounded style={{ fontSize: 22, color: "#1D4ED8" }} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-content-primary font-poppins">
                  Telecom Innovation, Research &amp; Training Centre (TIRTC)
                </span>
                <span className="text-sm" style={{ color: "#475569" }}>
                  BRBRAITT Campus, Jabalpur, Madhya Pradesh
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(29,78,216,0.07)" }}>
                <EmailRounded style={{ fontSize: 20, color: "#1D4ED8" }} />
              </div>
              <span className="text-sm" style={{ color: "#475569" }}>Email: —</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(29,78,216,0.07)" }}>
                <PhoneRounded style={{ fontSize: 20, color: "#1D4ED8" }} />
              </div>
              <span className="text-sm" style={{ color: "#475569" }}>Phone: —</span>
            </div>
          </div>

          {/* Right — map placeholder */}
          <div
            className="rounded-2xl h-64 flex items-center justify-center"
            style={{ background: "rgba(29,78,216,0.04)", border: "1.5px dashed rgba(29,78,216,0.2)" }}
          >
            <span className="text-sm font-medium" style={{ color: "#94A3B8" }}>Map / Location Visual</span>
          </div>
        </div>

      </div>
    </section>
  );
}
