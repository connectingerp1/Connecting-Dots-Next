import { MarqueeShowcase } from "./MarqueeShowcase";

const achievementsBackgroundImage =
  "https://res.cloudinary.com/df65lfym1/image/upload/v1781775393/ChatGPT_Image_Jun_18_2026_03_03_25_PM_cfhfki.webp";

const topImages = [
  { id: "t1", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760559/WhatsApp_Image_2026-01-19_at_12.25.47_PM_idr3mk.webp" },
  
  { id: "t3", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760582/CDERP_5_2-2-26_a0xzbd.webp" , alt: "Connecting Dots Erp" },
  { id: "t4", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760582/CDERP_4_2-2-26_we7qsf.webp" , alt: "Connecting Dots Erp" },
  { id: "t5", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760581/CDERP_3_2-2-26_yyxffi.webp" , alt: "Connecting Dots Erp" },
  { id: "t6", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760581/CDERP_2-2-26_nxxfhk.webp", alt: "Connecting Dots Erp" },
  { id: "t7", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433190/4_gmweo7.avif" , alt: "Connecting Dots Erp" },
  { id: "t8", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433355/19_myauqb.avif" , alt: "Connecting Dots Erp" },
  { id: "t9", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433355/5_opiag2.avif" , alt: "Connecting Dots Erp" },
  { id: "t10", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433489/6_a6d9ch.avif" , alt: "Connecting Dots Erp" },
];
 
const bottomImages= [
  { id: "b1", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760581/CDERP_2_2-2-26_uavlcw.webp"  , alt: "Connecting Dots Erp" },
  { id: "b2", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760582/certificate_ceremony_xx7gax.webp" , alt: "Connecting Dots Erp" },
  { id: "b2", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760571/WhatsApp_Image_2026-01-09_at_6.10.23_PM_1_piondc.webp"  , alt: "Connecting Dots Erp" },
  { id: "b3", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760561/WhatsApp_Image_2026-02-09_at_3.19.17_PM_djjbgt.webp"  , alt: "Connecting Dots Erp" },
  { id: "b4", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760571/Student_Certificate_pune.jpg_qjrfrf.webp"  , alt: "Connecting Dots Erp" },
  { id: "b5", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760571/sap_JD_geotag.jpg_xykawo.webp" , alt: "Connecting Dots Erp" },
  { id: "b6", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760570/sap_studnet_dexojs.webp" , alt: "Connecting Dots Erp" },
  { id: "b7", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760560/WhatsApp_Image_2026-03-04_at_11.39.18_AM_1_a1pgng.webp" , alt: "Connecting Dots Erp" },
  { id: "b8", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433354/15_rpr8xg.avif"  , alt: "Connecting Dots Erp" },
  { id: "b9", src: "https://res.cloudinary.com/duz9xipfm/image/upload/v1765433428/14_ewaid4.avif"  , alt: "Connecting Dots Erp" },
  { id: "b10", src: "https://res.cloudinary.com/df65lfym1/image/upload/v1781760570/SAP_FICO_Course_Completed_uxxyl3.webp"  , alt: "Connecting Dots Erp" },
];
 
export default function Achievements() {
  return (
    <main
      className="relative w-full max-w-[1800px] mx-auto overflow-hidden py-12 px-4 m-10 flex items-center rounded-lg bg-cover bg-center bg-no-repeat"

      style={{ backgroundImage: `url(${achievementsBackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white/20" />
      <div className="relative z-10 w-full">
        <div className="text-center mb-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-wide bg-gradient-to-r from-[#010162] via-[#036f85] to-[#020255] bg-clip-text text-transparent mb-2">
              Glimpses of Excellence
         </h2>
        </div>
        <MarqueeShowcase topImages={topImages} bottomImages={bottomImages} speed={50} />
      </div>
    </main>

  );
}
