import styles from "@/styles/AboutPage/Objective.module.css";
import Image from "next/image";

const Objective = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>

        <h2 className={styles.title}>Our Objective</h2>
        <p className={styles.text}>
          Our goal is to create a global platform that enables students and working professionals 
          to reach their full potential and build rewarding careers. We seek to provide opportunities 
          that motivate individuals to succeed, regardless of their current stage in the professional 
          landscape. By delivering high-quality training programs and classes designed to meet industry 
          demands, we ensure that our candidates acquire the skills and knowledge necessary to excel in 
          their selected fields. We are dedicated to fostering a supportive and inclusive environment 
          where learners can develop, tackle challenges, and pursue their career goals with assurance. 
          Through ongoing innovation and a commitment to excellence, we aim to be a reliable partner in 
          shaping the futures of our students and professionals, assisting them in transforming their 
          aspirations into reality.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src="/Aboutus/Our objective.png" 
          alt="Our Objective" 
          width={500} 
          height={350} 
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Objective;
