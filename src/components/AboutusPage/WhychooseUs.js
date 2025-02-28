import styles from '@/styles/AboutPage/WhychooseUs.module.css';
import Image from 'next/image';

const WhychooseUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Why Choose Us?</h1>

        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Aboutus/Why choose us.png"
              alt="Why Choose Us"
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p>
              <span className={styles.highlight}> Our courses,</span> taught by experienced trainers, offer hands-on learning through live projects, 
            comprehensive interview preparation, and career advancement opportunities. With an affordable 
            fee structure and a supportive learning environment, you'll gain the skills you need to succeed. 
            Plus, with <strong>100% placement assistance</strong>, we ensure you're well on your way to a successful career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhychooseUs;
