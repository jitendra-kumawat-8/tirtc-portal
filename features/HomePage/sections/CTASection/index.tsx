import Link from "next/link";
import { ArrowForwardRounded, CheckCircleOutlineRounded } from "@mui/icons-material";

const candidatePoints = [
  "Access training in telecom and emerging technologies",
  "Build job-ready skills aligned to industry requirements",
  "Explore employment opportunities",
];

const employerPoints = [
  "Access a pipeline of industry-trained, job-ready talent",
  "Collaborate on skilling and workforce development",
  "Participate in training and innovation initiatives",
];

export default function CTASection() {
  return (
    <section id="apply" className="bg-white py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10">

        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Apply for Jobs / Employer Login
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Candidates */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-6"
            style={{
              border: "1.5px solid rgba(29,78,216,0.15)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <h3 className="text-xl font-bold text-content-primary font-poppins">For Candidates</h3>
            <ul className="flex flex-col gap-3">
              {candidatePoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircleOutlineRounded
                    className="flex-shrink-0 mt-0.5"
                    style={{ fontSize: 18, color: "#1D4ED8" }}
                  />
                  <span className="text-sm" style={{ color: "#475569" }}>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link
                href="/apply"
                className="btn-transition inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold bg-primary-700 text-white rounded-full hover:bg-primary-900 shadow-sm"
              >
                Apply Now <ArrowForwardRounded fontSize="small" />
              </Link>
              <Link
                href="/register"
                className="btn-transition text-center px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-primary-700/[0.06]"
                style={{ border: "1.5px solid rgba(29,78,216,0.3)", color: "#1D4ED8" }}
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Employers */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-6 text-white"
            style={{
              background: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
              boxShadow: "0 8px 32px rgba(29,78,216,0.2)",
            }}
          >
            <h3 className="text-xl font-bold font-poppins">For Employers</h3>
            <ul className="flex flex-col gap-3">
              {employerPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircleOutlineRounded
                    className="flex-shrink-0 mt-0.5"
                    style={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }}
                  />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link
                href="/employer-login"
                className="btn-transition inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold bg-white text-primary-700 rounded-full hover:bg-white/90 shadow-sm font-poppins"
              >
                Employer Login <ArrowForwardRounded fontSize="small" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
