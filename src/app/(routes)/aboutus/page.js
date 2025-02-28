// pages/about.js
import React from "react";
import WhoweAre from "@/components/AboutusPage/WhoweAre";
import ProgressBars from "@/components/AboutusPage/ProgressBars";
import WhychooseUs from "@/components/AboutusPage/WhychooseUs";
import Objective from "@/components/AboutusPage/Objective";
import AboutGallery from "@/components/AboutusPage/AboutGallery";
// import ProgressBars from "@/components/AboutusPage/ProgressBars";
import Branches from "@/components/HomePage/Branches";
import AboutSidebar from "@/components/AboutusPage/AboutSidebar";
import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Sticky Sidebar */}
      <AboutSidebar />

      {/* Main Content */}
      <div className={styles.content}>
        <div id="whoweare" className={styles.section}>
          <WhoweAre />
        </div>

        <div id="progressbars" className={styles.section}>
          <ProgressBars />
        </div>

        <div id="whychooseus" className={styles.section}>
          <WhychooseUs />
        </div>

        <div id="objective" className={styles.section}>
          <Objective />
        </div>

        {/* <div id="progressbars" className={styles.section}>
          <ProgressBars />
        </div> */}

         <div id="gallery" className={styles.section}>
          <AboutGallery />
         </div>

        <div id="branches" className={styles.section}>
          <Branches />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
