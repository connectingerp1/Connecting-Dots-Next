"use client";

import React, { useEffect } from 'react';
import styles from '@/styles/HomePage/Chevron.module.css';

// Pre-defined chevron items to avoid re-creation on every render
const CHEVRON_ITEMS = [
  { text: "Enroll", href: "#1" },
  { text: "Corporate Style Training", href: "#2" },
  { text: "Real-Time Projects", href: "#3" },
  { text: "Interview Preparation", href: "#4" },
  { text: "Experience Alteration", href: "#5" },
  { text: "Job Assistance", href: "#6" }
];

const Phases = () => {
  // Preload the critical fonts and CSS in useEffect
  useEffect(() => {
    // Add this if your component is not initially visible in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Mark this component as a potential LCP candidate
          entry.target.classList.add(styles.visible);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    const container = document.querySelector(`.${styles.containerCH}`);
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div className={styles.containerCH}>
      {/* Use h1 instead of h2 for the LCP element to prioritize it */}
      <h1 className={styles.sectionTitle}>Training To Placement Approach</h1>
      <div className={styles.titleUnderline}></div>
      <div className={styles.phases}>
        <ul>
          {CHEVRON_ITEMS.map((item, index) => (
            <li key={index} className={styles.chevronItem}>
              <a href={item.href}>
                <h4>{item.text}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Phases;