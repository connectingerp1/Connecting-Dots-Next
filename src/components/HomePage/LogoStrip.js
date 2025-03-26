// LogoStrip.js
import styles from "@/styles/HomePage/HeaderCarousel.module.css";

export default function LogoStrip() {
  return (
    <div className={styles.logoStrip}>
      <picture>
        <source
          srcSet="/Headercarousel/logo_strip.webp"
          type="image/webp"
        />
        <source
          srcSet="/Headercarousel/logo strip.avif"
          type="image/avif"
        />
        <img
          src="/Headercarousel/logo_strip_fallback.png"
          alt="Partner companies logos including IBM, TCS, and other corporate partners"
          width="800"
          height="130"
          className={styles.logoImage}
          fetchPriority="high"
          decoding="sync"
        />
      </picture>
    </div>
  );
}