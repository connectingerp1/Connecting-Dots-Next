"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const premiumClients = [
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975971/Accenture_tq8yph.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975975/wipro_uaggn6.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975973/infosys_fwvbzh.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975973/google_fyyiqe.avif",
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975974/microsoft_rpgsvd.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975972/capgemini_a2rbho.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975974/tcs_d0gfvm.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975971/amdocs_ht9zgl.avif",
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975968/ibm_o9ourn.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975967/paytm_e2vqfx.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975972/capgemini_a2rbho.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975974/swiggy_t0utde.avif",
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975973/hdfc_jvdkoi.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975973/God_g8j8xc.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975972/baja_xxmf3l.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975970/bharatpe_p9ixem.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975967/pizza-hut_dhd1o8.webp",
];

const enterpriseClients = [
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975969/exl_zle2ra.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975966/volkswagon_pcvphe.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975967/jindal_njgnxp.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975967/john-deere_ohljwx.webp",
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975972/bostonbyte_hljirv.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975974/sharechat_eieyag.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975967/leapfinance_v7ykv6.webp",
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975967/moneytap_dizaqo.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975966/whitehat_emmomu.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975969/cummins_alim2w.webp",
];

const growingClients = [
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975971/airmeet_idryrc.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975972/ask_nncu3a.avif", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975970/bharatgri_weuerc.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975970/capita_r10ko1.webp",
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975969/crisi_ciluav.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975969/eatfit_bg4cj0.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975968/genius_tqh8rw.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975973/homelane_rl9bh6.avif",
  "https://res.cloudinary.com/df65lfym1/image/upload/v1777975968/iss_gcjk9j.webp", "https://res.cloudinary.com/df65lfym1/image/upload/v1777975967/kelly_bkcgnw.webp",
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getLogoAlt = (logoUrl) => {
  const filename = logoUrl.split("/").pop() || logoUrl;
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/^v\d+\//, "")
    .replace(/[_-]+/g, " ")
    .trim();
};

const MarqueeRow = ({ logos, direction = "left", speed = "normal", shuffle = false }) => {
  const [logosToUse, setLogosToUse] = useState(logos);

  useEffect(() => {
    setLogosToUse(shuffle ? shuffleArray(logos) : logos);
  }, [logos, shuffle]);

  const speedMultiplier =
    speed === "slow" ? "40s" :
    speed === "fast" ? "20s" :
    "30s";

  const animationClass =
    direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 sm:gap-6 md:gap-8 ${animationClass}`}
        style={{ 
          width: "max-content", 
          animationDuration: speedMultiplier,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }}
      >
        {logosToUse.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 group w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-2"
          >
            <Image
              src={logo}
              alt={getLogoAlt(logo)}
              width={120}
              height={100}
              className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
              loading={index < 4 ? "eager" : "lazy"}
              quality={75}
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
            />
          </div>
        ))}
        {logosToUse.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 group w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-2"
            aria-hidden="true"
          >
            <Image
              src={logo}
              alt=""
              width={120}
              height={100}
              className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              quality={75}
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const OurClients = () => {
  return (
    <section
      className="py-10 sm:py-12 md:py-16 relative"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        overflow: 'hidden',
        maxWidth: '1800px',
        margin: '0 auto',
      }}
    >
      {/* Subtle dotted pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 .895 2 2 2zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23bfc5ca\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-2">
              Our Clients
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-4"></div>
            <p className="text-gray-600 text-sm sm:text-base">Trusted by industry leaders worldwide</p>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Premium clients row */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <MarqueeRow 
              logos={premiumClients} 
              direction="left" 
              speed="slow" 
              shuffle={true} 
            />
          </div>

          {/* Enterprise clients row */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <MarqueeRow 
              logos={enterpriseClients} 
              direction="right" 
              speed="normal" 
              shuffle={false} 
            />
          </div>

          {/* Growing clients row */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <MarqueeRow 
              logos={growingClients} 
              direction="left" 
              speed="fast" 
              shuffle={true} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
