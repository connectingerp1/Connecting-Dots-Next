import { Suspense } from "react";
import "@/app/globals.css";
import HeaderCarousel from "@/components/HomePage/HeaderCarousel";
import Marquee from "@/components/HomePage/Marquee2";
import dynamic from "next/dynamic";
import Keypoints from "@/components/HomePage/Keypoints";
import OurClients from "@/components/HomePage/OurClients";
import PlacementSection from "@/components/HomePage/PlacementSection";
import OurStats from "@/components/HomePage/OurStats";
import Achievements from "@/components/HomePage/Achievements";
import FeedbackAndReviews from "@/components/HomePage/FeedbackandReviews";
import Certificate from "@/components/HomePage/Certificate";
import Branches from "@/components/HomePage/Branches";
import Courses from "@/components/HomePage/PopCourses";

// Import Chevron directly instead of dynamically to ensure faster loading
import Chevron from "@/components/HomePage/Chevron";

// Placeholder for the Chevron component while it loads
const ChevronPlaceholder = () => (
  <div
    style={{
      padding: "20px",
      margin: "20px auto",
      maxWidth: "1800px",
      width: "97.5%",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: 700,
        color: "#333",
        margin: "0.5em 0",
      }}
    >
      Training To Placement Approach
    </h1>
    <div
      style={{
        width: "80px",
        height: "4px",
        background: "linear-gradient(90deg, #a76b2e, #f18436)",
        margin: "15px auto 25px",
        borderRadius: "2px",
      }}
    ></div>
  </div>
);

export default function HomePage() {
  return (
    <main className="flex-col justify-center">
      <HeaderCarousel />
      <Marquee />

      {/* Using Suspense for the Chevron component */}
      <Suspense fallback={<ChevronPlaceholder />}>
        <Chevron />
      </Suspense>

      <Keypoints />
      <OurClients />
      <Courses />
      <PlacementSection />
      <OurStats />
      <Achievements />
      <FeedbackAndReviews />
      <Certificate pageId="HomepageCERT" />
      <Branches />
    </main>
  );
}
