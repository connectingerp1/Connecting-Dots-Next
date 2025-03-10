"use client";

import React from "react";
import PageHeader from "@/components/AboutusPage/PageHeader";
import ProgressBars from "@/components/AboutusPage/ProgressBars";
import AboutGallery from "@/components/AboutusPage/AboutGallery";
import styles from "@/styles/AboutPage.module.css";
import Branches from "@/components/AboutusPage/Branches";
import StickyScrollReveal from "@/components/AboutusPage/StickyScrollReveal";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div id="PageHeader" className={styles.section}>
        <PageHeader />
      </div>

      <div id="StickyScrollReveal" className={styles.section}>
        <StickyScrollReveal />
      </div>

      <div id="progressbar" className={styles.section}>
        <ProgressBars />
      </div>

      <div id="gallery" className={styles.section}>
        <AboutGallery />
      </div>

      <div id="branches" className={styles.section}>
        <Branches />
      </div>
    </div>
  );
};

export default AboutPage;
