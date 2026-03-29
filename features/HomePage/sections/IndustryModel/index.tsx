import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { modelPoints, frameworkItems, deliveryEcosystem } from "./constants";

export default function IndustryModel() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-700">Industry Model</span>
              <h2 className="text-3xl md:text-4xl font-bold text-content-primary tracking-tight">
                A CII-anchored framework for sustainable skill delivery.
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {modelPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircleOutlineRounded
                    style={{ fontSize: 20, color: "#1D4ED8", flexShrink: 0, marginTop: 1 }}
                  />
                  <span className="text-sm text-content-secondary">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-content-muted">
                CII Framework includes
              </span>
              <div className="grid grid-cols-2 gap-3">
                {frameworkItems.map((item) => (
                  <div key={item} className="rounded-xl border border-gray-200 bg-background-secondary px-4 py-3">
                    <span className="text-sm text-content-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-content-muted">
                Skill delivery ecosystem
              </span>
              <div className="grid grid-cols-2 gap-3">
                {deliveryEcosystem.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border px-4 py-3"
                    style={{ borderColor: "#06B6D4", backgroundColor: "#ECFEFF" }}
                  >
                    <span className="text-sm font-medium" style={{ color: "#0891B2" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
