import { objectives } from "./constants";
import { BG_TINTED_2 } from "../../backgrounds";

export default function Objective() {
  return (
    <section
      id="objective"
      className="scroll-mt-24 relative overflow-hidden"
      style={{ background: BG_TINTED_2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28">
        <div className="flex flex-col gap-10">

          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Objective
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="obj-card rounded-2xl bg-white border border-gray-100 p-6 flex flex-col gap-6 shadow-sm cursor-default"
              >
                <div className="obj-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(29,78,216,0.07)", transition: "background 0.3s ease" }}>
                  <Icon className="obj-icon obj-icon-wiggle" style={{ fontSize: 30, color: "#1D4ED8", transition: "color 0.3s ease" }} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="obj-title text-base font-semibold text-content-primary font-poppins transition-colors duration-300">{title}</h3>
                  <p className="obj-text text-sm text-content-secondary leading-relaxed transition-colors duration-300">{text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
