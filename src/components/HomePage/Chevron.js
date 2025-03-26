import React from 'react';
import styles from '@/styles/HomePage/Chevron.module.css';

const Phases = () => {
  return (
    <div className={styles.containerCH}>
      <h1 className={styles.sectionTitle}>Training To Placement Approach</h1>
      <div className={styles.titleUnderline}></div>
      <div className={styles.phases}>
        <ul>
          <li className={`${styles.chevronItem} ${styles.highestSalary}`}>
            <a href="#1">
              <h4 style={{ marginTop: '10px' }}>Enroll</h4>
            </a>
          </li>
          <li className={`${styles.chevronItem} ${styles.highestSalary}`}>
            <a href="#2">
              <h4>Corporate Style Training</h4>
            </a>
          </li>
          <li className={`${styles.chevronItem} ${styles.studentsTrained}`}>
            <a href="#3">
              <h4>Real-Time Projects</h4>
            </a>
          </li>
          <li className={`${styles.chevronItem} ${styles.hiringCompanies}`}>
            <a href="#4">
              <h4>Interview Preparation</h4>
            </a>
          </li>
          <li className={`${styles.chevronItem} ${styles.totalBranches}`}>
            <a href="#5">
              <h4>Experience Alteration</h4>
            </a>
          </li>
          <li className={`${styles.chevronItem} ${styles.highestSalary}`}>
            <a href="#6">
              <h4>Job Assistance</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Phases;