import PlacementsClient from "./PlacementsClient";

export const metadata = {
  title: "Placements | Connecting Dots ERP",
  description:
    "Explore placements, placement support, FAQs, and social updates from Connecting Dots ERP.",
  alternates: {
    canonical: "https://connectingdotserp.com/placements",
  },
};

export default function PlacementsPage() {
  return <PlacementsClient />;
}
