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

// Bootstrap CSS will be loaded with a lower priority
// import "bootstrap/dist/css/bootstrap.min.css";

const GTM_ID = "GTM-MB68QM2V";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>Connecting Dots ERP | SAP Training Institute In Pune</title>
        <meta
          name="description"
          content="We offer Expert-led training in SAP, Software Development, Digital Marketing, and HR Courses with strong placement support for your career."
        />
        <meta
          name="keywords"
          content="SAP Certification Courses, SAP Course, Data Science Course, Power Bi Course, Digital Marketing Course, HR Training Institute, SAP Training Institute, Python Course, Software Course, Training, Education"
        />
        <meta
          name="author"
          content="Connecting Dots ERP | Software and SAP Training Institute"
        />

        {/* Preload critical resources - including new Chevron CSS */}
        <link
          rel="preload"
          href="/Headercarousel/logo strip.avif"
          as="image"
          fetchPriority="high"
        />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        />

        {/* Load Bootstrap CSS with lower priority */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          media="print"
          onLoad="this.media='all'"
        />

        {/* Critical CSS for key elements for better LCP */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Logo strip styles */
              .logoStrip img {
                height: 130px;
                width: 800px;
                margin-left: 10px;
                display: block;
                content-visibility: auto;
                will-change: transform;
                opacity: 1;
              }
              
              /* Critical Chevron styles for LCP */
              .Chevron_containerCH__pkYku {
                padding: 20px;
                margin: 20px auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 1800px;
                width: 97.5%;
                contain: layout style;
              }
              
              .Chevron_containerCH__pkYku h1 {
                font-size: 2.5rem;
                font-weight: 700;
                letter-spacing: 4px;
                background: linear-gradient(90deg, #fff 35%, rgba(3, 163, 196, 1) 49%, #fff 62%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                text-align: center;
                margin-top: 0.5em;
                margin-bottom: 0.5em;
                text-rendering: optimizeSpeed;
              }
              
              .Chevron_titleUnderline__uIc_R {
                width: 80px;
                height: 4px;
                background: linear-gradient(90deg, #a76b2e, #f18436);
                margin: 15px auto 25px;
                border-radius: 2px;
              }
              
              /* Responsive styles */
              @media (max-width: 768px) {
                .logoStrip img {
                  width: 100%;
                  height: auto;
                  margin-left: 0;
                }
                .Chevron_containerCH__pkYku h1 {
                  font-size: 2rem;
                  letter-spacing: 2px;
                }
              }
            `,
          }}
        />

        {/* Google Tag Manager - HEAD - with lower priority */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
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
