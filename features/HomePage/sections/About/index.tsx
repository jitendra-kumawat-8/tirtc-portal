import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 flex min-h-screen flex-col overflow-hidden lg:flex-row"
    >
      {/* Left: image — object-cover fills the column */}
      <div className="relative min-h-[40vh] w-full shrink-0 overflow-hidden lg:min-h-screen lg:w-1/2">
        <Image
          src="/assets/about-us1.png"
          alt="TIRTC training and infrastructure"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
        <div className="absolute inset-0 z-[1] bg-black/15" aria-hidden />
      </div>

      {/* Right: copy */}
      <div className="relative z-[1] flex w-full flex-1 flex-col justify-center bg-background-secondary px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto flex w-full max-w-xl flex-col gap-4 xl:max-w-2xl">
          <h2 className="section-heading">About TIRTC</h2>
          <h3 className="text-lg font-semibold leading-snug text-content-primary md:text-xl">
            Skilling, innovation and employability for a future-ready telecom workforce
          </h3>
          <p className="section-description text-sm md:text-base">
            The Indian telecom industry, contributing 6.5% to GDP, is rapidly transforming with
            the adoption of 5G, IoT, AI, and cloud technologies, driving a sharp rise in demand
            for a highly skilled, future-ready workforce.
            <br />
            <br />
            Key roles across network engineering, cybersecurity, data analytics, cloud
            operations, automation, and fiber-optic technologies are witnessing significant
            growth, along with increased demand in field operations and maintenance.
            <br />
            <br />
            However, this transition is expected to create a skill gap of nearly 2.5 million
            professionals by 2030, underscoring the urgent need for industry-aligned skilling
            initiatives.
            <br />
            <br />
            The{" "}
            <strong className="font-semibold text-content-primary">
              Telecom Innovation, Research &amp; Training Centre (TIRTC), Jabalpur
            </strong>
            , is designed to address this emerging need. As an industry-led hub for telecom
            R&amp;D, innovation, skilling and employment, TIRTC adopts a structured, scalable
            and industry-integrated approach to bridge the talent gap.
            <br />
            <br />
            By directly linking training with employability outcomes, the Centre aims to build a
            continuous pipeline of industry-ready talent and position India as a global hub for
            telecom skills and digital infrastructure development.
          </p>
        </div>
      </div>
    </section>
  );
}
