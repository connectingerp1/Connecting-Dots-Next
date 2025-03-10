"use client";
import ParallaxScroll from "@/components/HomePage/ParallaxScroll";
import styles from "@/styles/HomePage/Achievements.module.css";

const images = [
  "https://i.imgur.com/iNrXB47.jpg",
  "https://i.imgur.com/rZohnIF.jpg",
  "https://i.imgur.com/qhMS713.jpg",
  "https://i.imgur.com/your4dg.jpg",
  "https://i.imgur.com/FXN1ezN.jpg",
  "https://i.imgur.com/xz6STYH.jpg",
  "https://i.imgur.com/iNrXB47.jpg",
  "https://i.imgur.com/rZohnIF.jpg",
  "https://i.imgur.com/qhMS713.jpg",
  "https://i.imgur.com/your4dg.jpg",
  "https://i.imgur.com/FXN1ezN.jpg",
  "https://i.imgur.com/xz6STYH.jpg",
  "https://i.imgur.com/iNrXB47.jpg",
  "https://i.imgur.com/rZohnIF.jpg",
  "https://i.imgur.com/qhMS713.jpg",
  "https://i.imgur.com/your4dg.jpg",
  "https://i.imgur.com/FXN1ezN.jpg",
  "https://i.imgur.com/xz6STYH.jpg",
];

const Achievement = () => {
  return (
    <section id="achievements" className={styles.achievements}>
      <h2>Our Achievements</h2>
      <div className={styles.titleUnderline}></div>
      <ParallaxScroll images={images} />
    </section>
  );
};

export default Achievement;
