import "./globals.css";
import { CityProvider } from "@/context/CityContext";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import CallAdvisorsStrip from "@/components/CallAdvisorsStrip";
import Marquee from "@/components/Marquee";
import Stickyform from "@/components/Stickyform";
import WaveComponent from "@/components/Wave";
import PopupForm from "@/components/PopupForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "@/components/Chatbot";
import Whatsapp from "@/components/Whatsapp";
import Floatingcontact from "@/components/Floatingcontact";
import BottomMenu from "@/components/BottomMenu";
import Script from "next/script"; // Import Next.js Script

export const metadata = {
  title: "Software Training in Pune with placement support",
  description: "Connecting Dots ERP",
};

// Your Google Tag Manager & Search Console verification
const GTM_ID = "GTM-MB68QM2V"; // Replace with your GTM ID

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - HEAD */}
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
      <body className="body" cz-shortcut-listen="true">
        {/* Google Tag Manager - BODY (noscript fallback) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

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