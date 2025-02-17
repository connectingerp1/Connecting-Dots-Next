import "./globals.css";
import { CityProvider } from "@/context/CityContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallAdvisorsStrip from "@/components/CallAdvisorsStrip";
import Marquee from "@/components/Marquee";
import Stickyform from '@/components/Stickyform';
import WaveComponent from "@/components/Wave";
import PopupForm from '@/components/PopupForm';


export const metadata = {
  title: "Software Training in Pune with placement support",
  description: "Connecting Dots ERP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
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
        <Stickyform />
           {/* <PopupForm />   */}
        <WaveComponent />
        <Footer />

      </body>
    </html>
  );
}
