import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BG_TINTED_2 } from "../HomePage/backgrounds";
import { jobCards } from "../HomePage/sections/Courses/constants";
import { FeaturedJobCard } from "../HomePage/sections/Courses/FeaturedJobCard";

export default function JobsPage() {
  return (
    <>
      <Head>
        <title>Featured Jobs | TIRTC</title>
        <meta
          name="description"
          content="Explore representative telecom and technology roles aligned with TIRTC skilling tracks — show interest for roles that match your training path."
        />
      </Head>

      <div className="min-h-screen" style={{ background: BG_TINTED_2 }}>
        <nav className="sticky top-0 z-50 border-b border-primary-900/[0.07] bg-white/[0.94] backdrop-blur-lg">
          <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-20">
            <Link href="/" className="flex flex-shrink-0 items-center gap-3">
              <Image
                src="/logo/TIRTC LOGOS.png"
                alt="TIRTC"
                width={96}
                height={44}
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </Link>
            <Link
              href="/"
              className="btn-transition hidden rounded-full px-4 py-2 text-sm font-medium text-content-secondary hover:bg-primary-700/[0.06] hover:text-primary-700 sm:inline-block"
            >
              ← Back to Home
            </Link>
          </div>
        </nav>

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-16 pt-16 sm:px-6 lg:px-20">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Featured Jobs
          </span>
          <h1 className="font-poppins text-3xl font-bold leading-tight tracking-tight text-content-primary md:text-4xl">
            Roles aligned with TIRTC skilling tracks
          </h1>
          <p className="max-w-2xl text-base text-content-secondary">
            Representative openings for quick scanning — role-first details alongside our training
            programmes. Use <strong className="font-semibold text-content-primary">Show Interest</strong>{" "}
            on any role to register your interest with TIRTC.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobCards.map((job) => (
              <FeaturedJobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
