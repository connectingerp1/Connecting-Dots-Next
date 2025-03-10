import React from 'react';
import '@/styles/HomePage/Keypoints.css';

const Keypoints = () => {
  const keyFeatures = [
    {
      title: '10+ Years Experience',
      desc: 'Seasoned professional with over 10 years of experience in the field.',
    },
    {
      title: 'MNC Experienced Professional',
      desc: 'Learn from seasoned professionals with extensive industry experience and knowledge.',
    },
    {
      title: '100% Job Assistance',
      desc: 'Round-the-clock assistance to resolve queries and enhance the learning experience.',
    },
    {
      title: 'Corporate Style Training',
      desc: 'Craft impressive resumes to highlight your skills and achievements effectively.',
    },
    {
      title: 'Placement Assistance',
      desc: 'Engage in practical projects to apply data science concepts in real-world.',
    },
    {
      title: 'Real Time Training & Project',
      desc: 'Earn a recognized certification upon successful course completion.',
    },
  ];

  const homeAbout = [
    {
      cover: '/Keypoints/experiencelogo.avif',
      title: '10+ Years Experience',
      desc: 'Seasoned professional with over 10 years of experience in the field.',
      className: 'logo1',
    },
    {
      cover: '/Keypoints/corporate-alt.avif',
      title: 'MNC Experienced Professional',
      desc: 'Highly Qualified and Industry Experienced Professionals for providing Real-Time Scenario Based Training.',
      className: 'logo1',
    },
    {
      cover: '/Keypoints/cptraining.avif',
      title: 'Corporate Style Training',
      desc: 'Multiple Batches & Support Systems to make sure you can learn according to your convenience.',
      className: 'logo2',
    },
    {
      cover: '/Keypoints/exp alt.avif',
      title: 'Experience Alteration',
      desc: 'After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual.',
      className: 'logo5',
    },
    {
      cover: '/Keypoints/watchlogo.avif',
      title: 'Real Time Training & Project',
      desc: 'After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual.',
      className: 'logo4',
    },
    {
      cover: '/Keypoints/job assistance.avif',
      title: '100% Job Assistance',
      desc: 'After Training Completion, we provide Job Assistance, Scheduled Interview for every Individual.',
      className: 'logo3',
    },
  ];
  
  return (
    <div className="key-courses-container text-center">
      <div className="keypoints-title">Why Connecting Dots ERP?</div>
      <div className="titleUnderline"></div>
      <div className="keypoints">
        <div className="circle">
          {keyFeatures.map((feature, index) => (
            <div className={`feature feature${index}`} key={index}>
              <div className="feature-title">{feature.title}</div>
            </div>
          ))}
          <div className="center-feature">
            <div className="center-text">
              <span className="centre-keypoints">Keypoints</span>
            </div>
          </div>
        </div>
        <div className="key-notes">
          {homeAbout.map((feature, index) => (
            <div className="note" key={index}>
              <div className="img">
                <img
                  src={feature.cover}
                  alt={feature.title}
                  className={feature.className}
                />
              </div>
              <div className="key-text-container">
                <strong>{feature.title}:</strong> {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keypoints;
