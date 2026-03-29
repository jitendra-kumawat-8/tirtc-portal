import { steps } from "./constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background-secondary py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-700">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-content-primary tracking-tight">
            A 30/70 training model designed for industry readiness.
          </h2>
          <p className="text-base text-content-secondary max-w-2xl leading-relaxed">
            Candidates move from structured foundational training to hands-on industry apprenticeships — weighted toward
            real-world practice, employer relevance, and practical confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {steps.map((item) => (
            <div key={item.step} className="rounded-2xl bg-white p-6 flex flex-col gap-4">
              <span className="text-3xl font-black" style={{ color: "#06B6D4" }}>
                {item.step}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-content-primary">{item.title}</h3>
                <p className="text-sm text-content-secondary leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
