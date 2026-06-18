import { MarqueeShowcase } from "./MarqueeShowcase";

const topImages = [
  { id: "t1", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760582/CDERP_2_chmbov.webp" },
  { id: "t2", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760582/certificate_ceremony_xx7gax.webp" },
  { id: "t3", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760582/CDERP_5_2-2-26_a0xzbd.webp" },
  { id: "t4", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760582/CDERP_4_2-2-26_we7qsf.webp" },
  { id: "t5", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760581/CDERP_3_2-2-26_yyxffi.webp"  },
  { id: "t6", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760581/CDERP_2-2-26_nxxfhk.webp"},
  { id: "t7", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433190/4_gmweo7.avif" },
  { id: "t8", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433355/19_myauqb.avif" },
  { id: "t9", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433355/5_opiag2.avif" },
  { id: "t10", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433489/6_a6d9ch.avif" },
];
 
const bottomImages= [
  { id: "b1", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760581/CDERP_2_2-2-26_uavlcw.webp"  },
  { id: "b2", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760571/WhatsApp_Image_2026-01-09_at_6.10.23_PM_1_piondc.webp"  },
  { id: "b3", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760571/Student_Certifiacte_umkonp.webp"  },
  { id: "b4", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760571/Student_Certificate_pune.jpg_qjrfrf.webp"  },
  { id: "b5", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760571/sap_JD_geotag.jpg_xykawo.webp" },
  { id: "b6", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760570/sap_studnet_dexojs.webp"  },
  { id: "b7", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433140/17_r30m5r.avif"  },
  { id: "b8", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433354/15_rpr8xg.avif"  },
  { id: "b9", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433428/14_ewaid4.avif"  },
  { id: "b10", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760570/SAP_FICO_Course_Completed_uxxyl3.webp"  },
];
 
export default function Achievements() {
  return (
    <main className="relative w-full max-w-[1800px] mx-auto overflow-hidden py-12 px-4 m-10 flex items-center rounded-lg bg-[#eef6ff] shadow-[0_28px_90px_rgba(15,79,168,0.18)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.55),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(249,115,22,0.34),transparent_26%),radial-gradient(circle_at_45%_88%,rgba(20,184,166,0.44),transparent_34%),linear-gradient(135deg,#eaf5ff_0%,#f8fbff_46%,#e8fff7_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,79,168,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(15,79,168,0.18)_1px,transparent_1px)] bg-[size:34px_34px] opacity-45" />
      <div className="absolute -left-32 top-12 h-44 w-[130%] -rotate-6 bg-white/55 shadow-[0_20px_70px_rgba(255,255,255,0.55)]" />
      <div className="absolute -right-28 bottom-10 h-44 w-[70%] rotate-6 rounded-full bg-[#0f4fa8]/18 blur-2xl" />
      <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-white/70 bg-white/35 backdrop-blur-sm" />
      <div className="absolute right-12 top-10 h-20 w-20 rounded-full border border-[#0f4fa8]/20 bg-[#ffba49]/35 blur-[1px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0f4fa8]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
      <div className="relative z-10 w-full">
        <MarqueeShowcase topImages={topImages} bottomImages={bottomImages} speed={50} />
      </div>
    </main>

  );
}
