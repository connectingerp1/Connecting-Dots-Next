
"use client";

/* ---------- Inline SVG icons (no extra deps needed) ---------- */

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
  </svg>
);

const GradCapIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    <path d="M22 10v5" />
  </svg>
);

const StarOutline = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
);

const UsersIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 4.5a3 3 0 0 1 0 6" />
    <path d="M18 14c2.2.7 4 2.6 4 5" />
  </svg>
);

const BookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5a2 2 0 0 1 2-2h6v17H6a2 2 0 0 0-2 2V5z" />
    <path d="M20 5a2 2 0 0 0-2-2h-6v17h6a2 2 0 0 1 2 2V5z" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12" />
    <path d="M7 11l5 5 5-5" />
    <path d="M4 21h16" />
  </svg>
);

/* ---------- Lavender orbital-ring background ---------- */

const OrbitBackground = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 600 600"
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* concentric dotted orbital ellipses */}
    <g stroke="#a78bfa" strokeOpacity="0.9" strokeWidth="1.4" strokeDasharray="2 8" strokeLinecap="round">
      <ellipse cx="300" cy="300" rx="150" ry="120" transform="rotate(-25 300 300)" />
      <ellipse cx="300" cy="300" rx="220" ry="180" transform="rotate(-25 300 300)" />
      <ellipse cx="300" cy="300" rx="290" ry="235" transform="rotate(-25 300 300)" />
    </g>
    {/* faint solid arcs */}
    <g stroke="#c4b5fd" strokeOpacity="0.85" strokeWidth="1.2" fill="none">
      <ellipse cx="300" cy="300" rx="255" ry="205" transform="rotate(-25 300 300)" />
      <ellipse cx="300" cy="300" rx="185" ry="150" transform="rotate(-25 300 300)" />
    </g>
    {/* big soft circle */}
    <circle cx="150" cy="120" r="28" fill="#c4b5fd" fillOpacity="0.7" />
    {/* small dots on the orbits */}
    <g fill="#8b5cf6">
      <circle cx="92" cy="300" r="4.5" />
      <circle cx="470" cy="150" r="3.5" fillOpacity="0.9" />
      <circle cx="520" cy="360" r="4" fillOpacity="0.85" />
      <circle cx="210" cy="500" r="3.5" fillOpacity="0.9" />
      <circle cx="120" cy="430" r="3" fillOpacity="0.8" />
    </g>
    {/* diamond sparkles */}
    <g fill="#a78bfa" fillOpacity="0.95">
      <path d="M540 90l5 10 10 5-10 5-5 10-5-10-10-5 10-5z" />
      <path d="M70 200l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" />
    </g>
  </svg>
);

/* ---------- Data ---------- */



const heroBackgroundImage =
  "https://res.cloudinary.com/df65lfym1/image/upload/v1781782322/WhatsApp_Image_2026-06-18_at_3.51.37_PM_i4hsiu.webp";

/* ---------- Component ---------- */

export default function CareerHeroSlide({ onOpenForm }) {
  return (
    <section
      className="relative min-h-[560px] w-full overflow-hidden bg-purple-50 bg-center bg-cover bg-[position:68%_center] bg-no-repeat sm:min-h-[700px] sm:bg-[position:62%_center] md:min-h-[750px] lg:min-h-[800px]"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-950/15 via-transparent to-transparent" />
      {/* decorative sparkles */}
      <span className="pointer-events-none absolute right-5 top-10 z-10 select-none text-xl text-purple-200 sm:right-10 sm:top-12 sm:text-2xl">✦</span>
      <span className="pointer-events-none absolute right-1/3 top-24 z-10 hidden select-none text-lg text-purple-200 sm:block">✦</span>
      <span className="pointer-events-none absolute bottom-40 left-1/2 z-10 hidden select-none text-base text-purple-200 md:block">✦</span>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 sm:pt-12 lg:px-10 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* ---------------- Left column ---------------- */}
          <div className="relative z-10 max-w-2xl lg:col-span-5">
            {/* badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-purple-100 sm:px-4">
              <StarIcon className="h-4 w-4 shrink-0 text-purple-600" />
              <span className="min-w-0 text-xs font-semibold text-gray-800 sm:text-sm">
                India&apos;s Leading SAP &amp; IT Training with AI Institute
              </span>
            </div>

            {/* heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:mt-7 sm:text-5xl lg:text-6xl xl:text-7xl">
              Secure your 
              <br />
             <span className="text-purple-600">Dream Career</span> with
             <br/>
             Live Classes
            </h1>

            {/* sub copy */}
            <p className="mt-5 max-w-md rounded-3xl bg-white/85 px-4 py-3 text-base font-medium leading-relaxed text-gray-700 shadow-sm shadow-slate-900/5 sm:mt-6 sm:text-lg">
              From more than 10 years,we've been passionate about providing engaging, instructor-led training that helps professionals around the world grow and succeed
            </p>



            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                onClick={onOpenForm}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:bg-purple-700 sm:w-auto sm:px-7 sm:py-4"
              >
                Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ---------------- Right column (building) ---------------- */}
          <div className="relative hidden lg:col-span-7 lg:block">
            {/* lavender orbital-ring background */}
            <OrbitBackground className="absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2" />

            {/* soft radial glow behind building */}
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-purple-300/30 blur-3xl" />

            {/* <Image
              src=""
              alt="Connecting Dots ERP building"
              width={983}
              height={802}
              priority
              // mix-blend-multiply dissolves any residual light halo into the lavender bg
              style={{ mixBlendMode: "multiply" }}
              className="relative ml-auto w-full max-w-3xl object-contain"
            /> */}
          </div>
        </div>
      </div>


    </section>
  );
}
