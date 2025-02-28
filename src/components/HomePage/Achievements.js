import React from 'react';
import Image from 'next/image';
import styles from '@/styles/HomePage/Achievements.module.css';

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      <h1>OUR STUDENT'S ACHIEVEMENTS</h1>
      <div className={styles.achievementsGrid}>
        <div className={styles.achievementItem}>
          <Image src="/Acheivements/ach1.avif" alt="sap fico placed student img" width={330} height={200} />
        </div>
        <div className={styles.achievementItem2}>
          <Image src="/Acheivements/ach2.avif" alt="sap fico placed student img" width={280} height={200} />
        </div>
        <div className={styles.achievementItem}>
          <Image src="/Acheivements/ach3.avif" alt="sap fico placed student img" width={330} height={200} />
        </div>
        <div className={styles.achievementItem}>
          <Image src="/Acheivements/ach3.avif" alt="sap fico placed student img" width={330} height={200} />
        </div>
        <div className={styles.achievementItem5}>
          <Image src="/Acheivements/ach5.avif" alt="sap fico placed student img" width={280} height={200} />
        </div>
        <div className={styles.achievementItem}>
          <Image src="/Acheivements/ach6.avif" alt="sap fico placed student img" width={330} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
