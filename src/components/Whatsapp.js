"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/Whatsapp.module.css";

const Whatsapp = ({ phoneNumber }) => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const isAdminPath = pathname && (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/superadmin') ||
    pathname.startsWith('/AdminLogin')
  );

  // ✅ Safe conditional rendering AFTER all hooks
  if (isAdminPath || isMobile) {
    return null;
  }

  const handleWhatsAppClick = () => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "").replace(/^0+/, "");
    const whatsappURL = `https://wa.me/${formattedPhoneNumber}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.floatingWhatsappContainer}>
      <div className={styles.floatingWhatsapp} onClick={handleWhatsAppClick}>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </div>
    </div>
  );
};

export default Whatsapp;
