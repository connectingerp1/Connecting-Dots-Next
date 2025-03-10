import Image from "next/image";
import styles from "@/styles/HomePage/OurClients.module.css"; // Ensure class names match previous file

const clientLogos = [
  "Artboard 2.avif", "Artboard 10.avif", "Artboard 11.avif", "Artboard 12.avif",
  "Artboard 13.avif", "Artboard 14.avif", "Artboard 15.avif", "Artboard 16.avif",
  "Artboard 17.avif", "Artboard 18.avif", "Artboard 19.avif", "Artboard 20.avif",
  "Artboard 21.avif", "Artboard 22.avif", "Artboard 23.avif", "Artboard 24.avif",
  "Artboard 25.avif", "Artboard 26.avif", "Artboard 40.avif", "Artboard 41.avif",
  "Artboard 42.avif", "Artboard 43.avif", "Artboard 44.avif", "Artboard 45.avif",
  "Artboard 46.avif", "Artboard 47.avif", "Artboard 48.avif", "Artboard 49.avif",
  "Artboard 50.avif", "Artboard 51.avif", "Artboard 52.avif", "Artboard 53.avif",
  "Artboard 54.avif"
];

const Marquee = ({ reverse = false }) => (
  <div className={`${styles.marquee} ${reverse ? styles.marqueeReverse : ""}`}>
    <div className={styles.marqueeContent}>
      {[...clientLogos, ...clientLogos].map((logo, index) => (
        <div key={index} className={styles.clientLogoContainer}>
          <Image 
            src={`/Ourclients/${logo}`} 
            alt={`Client ${index + 1}`} 
            width={180} 
            height={90} 
            className={styles.clientLogo} 
          />
        </div>
      ))}
    </div>
  </div>
);

const OurClients = () => (
  <section className={styles.ourClientsSection}>
    <h2 className={styles.sectionTitleC}>Our Clients</h2>
    <div className={styles.titleUnderline}></div>
    <div className={styles.marqueeContainer}>
      <Marquee /> {/* Normal direction */}
      <Marquee reverse /> {/* Reversed direction for the middle marquee */}
      <Marquee /> {/* Normal direction */}
    </div>
  </section>
);

export default OurClients;
