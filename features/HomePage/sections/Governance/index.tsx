import { AccountBalanceRounded, GroupsRounded, HandshakeRounded } from "@mui/icons-material";
import { governingCouncil, industryPartnership, tirtcForum } from "./constants";
import { BG_TINTED_2 } from "../../backgrounds";

export default function Governance() {
  return (
    <section
      id="governance"
      className="scroll-mt-24 relative overflow-hidden  py-20 md:py-28"

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10 md:gap-12">
        <h2 className="section-heading">Governance Model</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="group obj-card flex flex-col gap-5 rounded-2xl border border-gray-100 bg-background-primary px-6 py-8 md:px-8 md:py-9 shadow-sm cursor-default">
            <div className="flex items-center gap-3">
              <div
                className="obj-icon-wrap w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(29,78,216,0.07)", transition: "background 0.3s ease" }}
              >
                <GroupsRounded
                  className="obj-icon obj-icon-wiggle"
                  style={{ fontSize: 22, color: "#1D4ED8", transition: "color 0.3s ease" }}
                />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <h3 className="obj-title section-subheading text-lg md:text-xl transition-colors duration-300">
                  {tirtcForum.title}
                </h3>
              </div>
            </div>
            <p className="obj-text section-description transition-colors duration-300">{tirtcForum.description}</p>
          </div>

          <div className="group obj-card flex flex-col gap-5 rounded-2xl border border-gray-100 bg-background-primary px-6 py-8 md:px-8 md:py-9 shadow-sm cursor-default">
            <div className="flex items-center gap-3">
              <div
                className="obj-icon-wrap w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(29,78,216,0.07)", transition: "background 0.3s ease" }}
              >
                <AccountBalanceRounded
                  className="obj-icon obj-icon-wiggle"
                  style={{ fontSize: 22, color: "#1D4ED8", transition: "color 0.3s ease" }}
                />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <h3 className="obj-title section-subheading text-lg md:text-xl transition-colors duration-300">
                  {governingCouncil.title}
                </h3>
              </div>
            </div>
            <p className="obj-text section-description transition-colors duration-300">{governingCouncil.description}</p>
            <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-primary-700 group-hover:marker:text-white/90">
              {governingCouncil.subcommittees.map((item) => (
                <li key={item} className="obj-text section-description pl-1 transition-colors duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="group obj-card flex flex-col gap-5 rounded-2xl border border-gray-100 bg-background-primary px-6 py-8 md:px-8 md:py-9 shadow-sm cursor-default">
            <div className="flex items-center gap-3">
              <div
                className="obj-icon-wrap w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(29,78,216,0.07)", transition: "background 0.3s ease" }}
              >
                <HandshakeRounded
                  className="obj-icon obj-icon-wiggle"
                  style={{ fontSize: 22, color: "#1D4ED8", transition: "color 0.3s ease" }}
                />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <h3 className="obj-title section-subheading text-lg md:text-xl transition-colors duration-300">
                  {industryPartnership.title}
                </h3>
              </div>
            </div>
            <p className="obj-text section-description transition-colors duration-300">{industryPartnership.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
