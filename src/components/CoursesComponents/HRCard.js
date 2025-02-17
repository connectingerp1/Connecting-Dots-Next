"use client"; //  Next.js Client Component

import React from "react";
import { useRouter } from "next/navigation"; //  Next.js Router
import styles from "@/styles/HrCard.module.css"; //  Import module CSS

const hrCards = [
  {
    title: "Core HR",
    copy: "Learn the essential functions of human resources with our Core HR Course in Pune...",
    button: "Know More",
    link: "/core-hr-course-in-pune",
  },
  {
    title: "HR Payroll",
    copy: "Master the intricacies of payroll management with our HR Payroll Training...",
    button: "Know More",
    link: "/hr-payroll-course-in-pune",
  },
  {
    title: "HR Analytics",
    copy: "Dive deep into the data-driven world of HR with our HR Analytics Course in Pune...",
    button: "Know More",
    link: "/hr-analytics-course-in-pune",
  },
  {
    title: "HR Generalist",
    copy: "Become a versatile HR professional with our Best HR Generalist Course...",
    button: "Know More",
    link: "/hr-generalist-course-in-pune",
  },
  {
    title: "HR Management",
    copy: "Grow your career with our HR Management Certification, designed for aspiring leaders...",
    button: "Know More",
    link: "/hr-management-course-in-pune",
  },
]

const HrCard = () => {
  const router = useRouter(); //  Next.js router for navigation

  const handleRedirect = (link) => {
    router.push(link); //  Navigate to Next.js pages
  }
  
  return (
    <div className={styles.cardsSection}>
      <h1 className={styles.cardsTitle}>HR COURSES WE OFFER</h1>
      <div className={styles.pageContent}>
        {hrCards.map((card, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardCopy}>{card.copy}</p>
              </div>
              <button className={styles.cardButton} onClick={() => handleRedirect(card.link)}>
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HrCard;
