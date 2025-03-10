import fs from "fs/promises"; // Use fs.promises for asynchronous file operations
import path from "path";
import { notFound } from "next/navigation";
import CourseComponentLoader from "@/components/CourseComponentLoader";
import ClientOnly from "@/context/ClientOnly";

// Generate static params from file names
export async function generateStaticParams() {
  const pagesDir = path.join(process.cwd(), "src/pages");

  try {
    // Read the directory asynchronously
    const filenames = await fs.readdir(pagesDir);

    // Map to return slugs with course and city info
    return filenames.map((file) => {
      const slug = file.replace(".html", ""); // Remove .html to form the slug
      return {
        slug, // Return the full slug, e.g., 'sap-basis-course-in-agra'
      };
    });
  } catch (err) {
    console.error("Error reading pages directory:", err);
    return []; // Return an empty array if there's an error
  }
}

const CourseCityPage = async ({ params }) => {
  // Ensure params.slug is available
  if (!params || !params.slug) {
    console.error("Missing slug parameter.");
    return notFound(); // 404 if slug is missing
  }

  const { slug } = params;
  const filePath = path.join(process.cwd(), "src/pages", `${slug}.html`);

  let htmlContent = "";

  try {
    // Read the HTML file asynchronously
    htmlContent = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    console.error(`Error reading file for slug ${slug}:`, err);
    return notFound(); // 404 if the file doesn't exist
  }

  // Extract course and city from the slug
  const slugParts = slug.split("-");
  const course = slugParts.slice(0, 2).join("-"); // Extract first two parts as course (e.g., 'sap-fico')
  const city = slugParts.slice(2).join("-"); // Join the rest as city (e.g., 'agra', 'pune', 'mumbai')

  const formattedCourse = course.toUpperCase(); // Ensure we are checking case-insensitively
  console.log("Formatted Course:", formattedCourse); // Debug log

  return (
    <>
      {/* Render Static HTML for SEO */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      {/* Render React Components */}
      <ClientOnly>
        <CourseComponentLoader formattedCourse={formattedCourse} city={city} course={course} />
      </ClientOnly>
    </>
  );
};
export default CourseCityPage;