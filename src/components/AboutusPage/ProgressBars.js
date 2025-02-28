'use client';

import React from 'react';
import styles from "@/styles/AboutPage/ProgressBars.module.css";

const ProgressBars = () => {
  const courses = [
    { name: 'SAP Courses', percentage: 97 },
    { name: 'IT Courses', percentage: 80 },
    { name: 'HR Courses', percentage: 95 },
    { name: 'Digital Marketing Courses', percentage: 90 },
    { name: 'Data Visualization Courses', percentage: 75 },
  ];

  return (
    <div className={styles.progressBarsContainer}>
      <div className={styles.progressBarsSection}>
        {courses.map((course, index) => (
          <div className={styles.progressBarItem} key={index}>
            <div className={styles.progressCourseName}>{course.name}</div>
            <div className={styles.progressBarWrapper}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${course.percentage}%` }}
              ></div>
            </div>
            <div className={styles.progressPercentage}>{course.percentage}%</div>
          </div>
        ))}
      </div>
      <div className={styles.progressDescriptionSection}>
        <h4 className={styles.progressHighlight}></h4>
        <h2>What You Have In Our Trending Online Courses</h2>
        <p>
          At Connecting Dots ERP, we’re dedicated to helping you discover exciting career
          opportunities through our practical, industry-oriented training. Our Trending Online
          Courses are crafted to equip you with the skills and confidence necessary to excel in
          today’s competitive job landscape. Whether you’re looking for SAP Courses, IT Courses, HR
          Courses, Digital Marketing Courses, or Data Visualization Courses, we have a program
          tailored to your aspirations. Our courses include current content and hands-on learning
          experiences to keep you ahead of the curve.
        </p>
        <p>
          Are you searching for an IT Course in Pune, a SAP Course in Pune, or an Online Digital
          Marketing Course in Pune? Our knowledgeable trainers will support you throughout your
          journey, providing personalized mentorship, real-world projects, and career assistance.
          From creating an impressive resume to preparing for mock interviews, we offer all the
          resources you need to succeed. Join us and take the first step toward a bright and
          rewarding career with courses that yield tangible results.
        </p>
      </div>
    </div>
  );
};

export default ProgressBars;
