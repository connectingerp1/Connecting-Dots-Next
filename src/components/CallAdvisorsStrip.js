"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import '../styles/CallAdvisorsStrip.css'; // Importing your normal CSS file

const CallAdvisorsStrip = () => {
  const [advisorsContact, setAdvisorsContact] = useState('');
  const [location, setLocation] = useState('default');

  useEffect(() => {
    fetch('/Jsonfolder/datacontact.json') // Adjust path if necessary
      .then((response) => response.json())
      .then((data) => {
        setAdvisorsContact(
          data[location]?.advisorsContact || data['default'].advisorsContact
        );
      });
  }, [location]);

  return (
    <div className="call-advisors-strip">
      {/* Left side content */}
      <div className="right-strip-content">
        <div>
          <div className="social-icons-strip">
            <Link href="https://www.facebook.com/sapinstallation.pune.9">
              <i className="fab fa-facebook-f hover:text-blue-600 transition duration-300"></i>
            </Link>
            <Link href="https://wa.me/919004002941">
              <i className="fab fa-whatsapp hover:text-green-500 transition duration-300"></i>
            </Link>
            <Link href="https://youtube.com/@connectingdotserp?si=hSKEiEg3MdytdEe_">
              <i className="fab fa-youtube hover:text-red-600 transition duration-300"></i>
            </Link>
            <Link href="https://in.linkedin.com/in/connecting-dots-erp-043039171">
              <i className="fab fa-linkedin-in hover:text-blue-700 transition duration-300"></i>
            </Link>
            <Link href="https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <i className="fab fa-instagram hover:text-pink-500 transition duration-300"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side content (Call Advisors) */}
      <div className="left-strip-content">
        <span className="phone-icon">
          <i className="fa fa-phone"></i>
        </span>
        <span className="advisor-text">Get Free Career Counselling: </span>
        <Link href={`tel:${advisorsContact}`} className="advisor-number text-decoration-none">
          {advisorsContact}
        </Link>
      </div>
    </div>
  );
};

export default CallAdvisorsStrip;
