"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import styles from "@/styles/BottomMenu.module.css"; // Import CSS module
import { FaBookOpen, FaWhatsapp, FaStar, FaPhoneAlt, FaFileAlt } from "react-icons/fa"; // Import icons
import ChatbotIcon from "@/components/ChatbotIcon";

const BottomMenu = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { 
    const handleResize = () => { 
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  const toggleChat = useCallback(() => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  }, []);

  const menuItems = [
    { href: "#", icon: <ChatbotIcon onClick={toggleChat} />, label: "Chatbot" }, 
    { href: "https://wa.me/+919004002958", icon: <FaWhatsapp size={24} color="green" />, label: "WhatsApp" }, 
    { href: "https://g.co/kgs/d827hLN", icon: <FaStar size={24} color="gold"/>, label: "Review 4.7", isReview: true },
    { href: "tel:+919004002958", icon: <FaPhoneAlt size={23} color="blue" />, label: "Contact" }, 
    { href: "/brochure", icon: <FaFileAlt size={24} />, label: "Brochure" }
  ];
 
  if (!isMobile) {
    return null; // Hide on desktop
  }

  return (
    <div className={`position-fixed bottom-0 start-0 end-0 bg-white p-3 shadow-lg ${styles.bottomMenu}`}>
      <div className="d-flex justify-content-around align-items-center gap-5">
        {menuItems.map((item, index) => (
          <Link href={item.href} key={index} className="text-decoration-none text-dark text-center">
            <div className="d-flex flex-column align-items-center">
              <span className={`fs-4 ${item.isReview ? styles.review : ""}`}>
                {item.icon}
              </span>
              <span className="small">{item.label}</span>
            </div>
          </Link>
        ))}   
      </div>
    </div>
  );
};

export default BottomMenu;
