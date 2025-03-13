import "@/app/globals.css";
import HeaderCarousel from "@/components/HomePage/HeaderCarousel";
import Marquee from "@/components/HomePage/Marquee2";
import Chevron from "@/components/HomePage/Chevron";
import Keypoints from "@/components/HomePage/Keypoints";
import OurClients from "@/components/HomePage/OurClients";
import PlacementSection from "@/components/HomePage/PlacementSection";
import OurStats from "@/components/HomePage/OurStats";
import Achievements from "@/components/HomePage/Achievements";
import FeedbackAndReviews from "@/components/HomePage/FeedbackandReviews";
import Certificate from "@/components/HomePage/Certificate";
import Branches from "@/components/HomePage/Branches";
import Courses from "@/components/HomePage/PopCourses";


export default function HomePage() {
  return (
    <main className="flex-col justify-center">
      <HeaderCarousel />
      <Marquee />
      {/* <Chevron /> */}
      <Keypoints />
      <OurClients />
      <Courses />
      <PlacementSection />
      <OurStats />
      <Achievements />
      <FeedbackAndReviews />
      <Certificate pageId= "HomepageCERT" />
      <Branches />
    </main>
  );
}
