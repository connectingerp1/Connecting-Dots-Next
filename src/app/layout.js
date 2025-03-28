import "./globals.css";
import { CityProvider } from "@/context/CityContext";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import CallAdvisorsStrip from "@/components/Common/CallAdvisorsStrip";
import Marquee from "@/components/Common/Marquee";
import Stickyform from "@/components/Stickyform";
import WaveComponent from "@/components/Wave";
import PopupForm from "@/components/PopupForm";
import Chatbot from "@/components/Chatbot";
import Whatsapp from "@/components/Whatsapp";
import Floatingcontact from "@/components/Floatingcontact";
import BottomMenu from "@/components/BottomMenu";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";

const GTM_ID = "GTM-MB68QM2V";

// Default metadata for all pages (can be overridden by individual pages)
// export const metadata = {
//   title: {
//     default: 'Connecting Dots ERP | SAP Training Institute In Pune',
//     template: '%s | Connecting Dots ERP'
//   },
//   description: 'We offer Expert-led training in SAP, Software Development, Digital Marketing, and HR Courses with strong placement support for your career.',
//   keywords: 'SAP Certification Courses, SAP Course, Data Science Course, Power Bi Course, Digital Marketing Course, HR Training Institute, SAP Training Institute, Python Course, Software Course, Training, Education',
//   author: 'Connecting Dots ERP | Software and SAP Training Institute'
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - HEAD */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l; j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        
        {/* Additional scripts if needed */}
        <Script 
          id="gtm-dataLayer-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            `
          }}
        />
      </head>
      <body className="body">
        {/* Google Tag Manager - BODY (noscript fallback) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        {/* Background Animation */}
        <div className="background-animation">
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        {/* UI Components */}
        <CallAdvisorsStrip />
        <Marquee />
        <Navbar />
        <CityProvider>{children}</CityProvider>
        <Floatingcontact phoneNumber="+919004002958" />
        <Whatsapp phoneNumber="+919004002958" />
        <Chatbot />
        <Stickyform />
        <PopupForm />
        <WaveComponent />
        <Footer />
        <BottomMenu />
      </body>
    </html>
  );
}