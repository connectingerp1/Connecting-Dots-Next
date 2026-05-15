"use client";

import "../styles/Wave.css";

const WaveComponent = () => {
  return (
    <div className="wave12-section" aria-hidden="true">
      <div className="wave-container">
        <svg
          className="static-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          focusable="false"
          role="presentation"
        >
          <path
            d="M0 34 C160 62 300 18 470 42 C650 68 780 24 960 43 C1140 62 1260 48 1440 24 L1440 120 L0 120 Z"
            fill="#182E4A"
          />
        </svg>
      </div>
    </div>
  );
};

export default WaveComponent;
