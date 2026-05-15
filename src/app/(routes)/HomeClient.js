// app/HomeClient.jsx  (client component)
'use client';

import dynamic from "next/dynamic";
import HeaderCarousel from "@/components/HomePage/HeaderCarousel";

const Marquee = dynamic(() => import("@/components/HomePage/Marquee2"), {
  ssr: false,
  loading: () => <div style={{ height: "60px" }} />,
});

const Chevron = dynamic(() => import("@/components/HomePage/Chevron"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "100px" }} />,
});

const Keypoints = dynamic(() => import("@/components/HomePage/Keypoints"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "300px" }} />,
});

const OurClients = dynamic(() => import("@/components/HomePage/OurClients"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "200px" }} />,
});

const PlacementSection = dynamic(
  () => import("@/components/HomePage/PlacementSection"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "400px" }} />,
  }
);

// ── NEW: compact placed-students ticker ──────────────────────────────────────
const PlacedTicker = dynamic(
  () => import("@/components/HomePage/PlacedTicker"),
  {
    ssr: false,
    loading: () => <div style={{ height: "190px", background: "#f8f9fb" }} />,
  }
);

const OurStats = dynamic(() => import("@/components/HomePage/OurStats"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "250px" }} />,
});

const Achievements = dynamic(
  () => import("@/components/HomePage/Achievements"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "300px" }} />,
  }
);

const FeedbackAndReviews = dynamic(
  () => import("@/components/HomePage/FeedbackandReviews"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "400px" }} />,
  }
);

const DemoCertificate = dynamic(
  () => import("@/components/HomePage/DemoCertificate"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "300px" }} />,
  }
);

const Branches = dynamic(() => import("@/components/HomePage/Branches"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "350px" }} />,
});

const Courses = dynamic(() => import("@/components/HomePage/PopCourses"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }} />,
});

const LatestBlogs = dynamic(() => import("@/components/HomePage/Blogs"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }} />,
});

export default function HomeClient() {
  return (
    <>
      <main className="flex-col justify-center">
        <h1 className="visually-hidden">
          Job-Oriented Training That Gets You Hired
        </h1>

        {/* Above the fold */}
        <HeaderCarousel />

        {/* Below the fold — lazy loaded */}
        <Marquee />
        <Chevron />
        <OurClients />
        <Keypoints />
        <Courses />
        <PlacementSection />

        {/* ── Placed students ticker (new) — sits right after PlacementSection ── */}
        <OurStats />

        <PlacedTicker />
        <Achievements
          grayscale={false}
          overlayBlurColor="transparent"
          segments={24}
          fit={0.5}
        />
        <FeedbackAndReviews />
        <DemoCertificate />
        <LatestBlogs />
        <Branches />
      </main>
    </>
  );
}
