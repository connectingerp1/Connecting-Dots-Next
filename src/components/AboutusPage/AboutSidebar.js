// components/AboutSidebar.js
import React from "react";
import styles from "@/styles/AboutPage.module.css";

const AboutSidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <a href="#whoweare">Who We Are</a>
        </li>
        <li>
          <a href="#whychooseus">Why Choose Us</a>
        </li>
        <li>
          <a href="#objective">Our Objectives</a>
        </li>
        <li>
          <a href="#progressbars">Progress</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#branches">Branches</a>
        </li>
      </ul>
    </nav>
  );
};

export default AboutSidebar;
