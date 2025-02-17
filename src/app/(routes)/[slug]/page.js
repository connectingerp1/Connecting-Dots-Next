import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

// Generate static params from file names
export function generateStaticParams() {
  const pagesDir = path.join(process.cwd(), "public/pages");
  const filenames = fs.readdirSync(pagesDir);

  // Map to return slugs with course and city info
  return filenames.map((file) => {
    const slug = file.replace(".html", ""); // Remove .html to form the slug
    return {
      slug, // Return the full slug, e.g., 'sap-basis-course-in-agra'
    };
  });
}

const CourseCityPage = async ({ params }) => {
  if (!params || !params.slug) {
    console.error("Missing slug parameter.");
    return notFound(); // 404 if slug is missing
  }

  const { slug } = params;
  const filePath = path.join(process.cwd(), "public/pages", `${slug}.html`);

  let htmlContent = "";
  if (fs.existsSync(filePath)) {
    htmlContent = fs.readFileSync(filePath, "utf-8");
  } else {
    return notFound(); // If no HTML file found, show 404
  }

  // Extract course and city from the slug
  const slugParts = slug.split("-");
  const course = slugParts.slice(0, 2).join("-"); // Extract first two parts as course (e.g., 'sap-fico')
  const city = slugParts.slice(2).join("-"); // Join the rest as city (e.g., 'agra', 'pune', 'mumbai')

  console.log("Course:", course); // Debug log for course

  // Dynamically import the correct course component based on the course name
  let CourseComponent = null;

  try {
    const formattedCourse = course.toUpperCase(); // Ensure we are checking case-insensitively
    console.log("Formatted Course:", formattedCourse); // Log the course for debugging

    // Use dynamic imports for specific courses
    if (formattedCourse === "SAP-FICO") {
      CourseComponent = dynamic(() => import("@/app/(routes)/SAP-FICO/page.js"));
    } else if (formattedCourse === "SAP-BASIS") {
      CourseComponent = dynamic(() => import("@/app/(routes)/SAP-BASIS/page.js"));
    } else if (formattedCourse === "SAP-PM") {
      CourseComponent = dynamic(() => import("@/app/(routes)/SAP-PM/page.js"));
    } else {
      console.error("No valid course component found for:", formattedCourse);
      CourseComponent = dynamic(() => import("@/app/(routes)/default-page.js")); // Fallback to default page
    }
  } catch (error) {
    console.error("Error loading course component:", error);
    CourseComponent = dynamic(() => import("@/app/(routes)/default-page.js")); // Fallback component
  }

  return (
    <>
      {/* Render Static HTML for SEO */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      {/* Render React Components */}
      {CourseComponent ? <CourseComponent city={city} course={course} /> : <p>Loading...</p>}
    </>
  );
};

export default CourseCityPage;
