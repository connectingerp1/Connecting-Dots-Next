import '../styles/Marquee.css'; // Import your existing CSS

const Marquee = () => {
  return (
    <div className="main-container__marquee">
      <div className="main-container__marquee-track">
        <div className="main-container__marquee-items">
          <span className="main-container__marquee-item">
            SAP FICO Batch Starting Soon!
          </span>
          <span className="main-container__marquee-item">
            Data Science A1 batch starting from 15th February!
          </span>
        </div>
        <div aria-hidden="true" className="main-container__marquee-items">
          <span className="main-container__marquee-item">
            Get exciting benefits by registering before 15th February!
          </span>
          <span className="main-container__marquee-item">
            SAP HANA batch commencing soon!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
