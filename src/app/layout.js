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

export const metadata = {
  title: "Software Training in Pune with placement support",
  description: "Connecting Dots ERP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body" cz-shortcut-listen="true">
        <div className="background-animation">
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>
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
