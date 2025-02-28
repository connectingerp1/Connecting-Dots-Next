import styles from '@/styles/AboutPage/WhoweAre.module.css';
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Who We Are?</h1>

        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://i.imgur.com/qhMS713.jpg"
              alt="Who We Are"
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p>
              <span className={styles.highlight}>Connecting Dots ERP</span> is the premier institute in Pune for training and certification in a variety of software fields. Our team of qualified professionals is dedicated to providing excellent service to individuals and organizations. We offer training that is tailored to the needs of our students and employed individuals, helping them gain the knowledge and skills they need to succeed. With practical and theoretical instruction, our courses provide the perfect foundation for a successful career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
