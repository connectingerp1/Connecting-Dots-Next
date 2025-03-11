import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import CourseComponentLoader from "@/components/CourseComponentLoader";
import ClientOnly from "@/context/ClientOnly";

// ✅ Server-side function to generate static paths
export async function generateStaticParams() {
  const pagesDir = path.join(process.cwd(), "src/pages");

  try {
    const filenames = await fs.readdir(pagesDir);
    return filenames.map((file) => ({
      slug: file.replace(".html", ""),
    }));
  } catch (err) {
    console.error("Error reading pages directory:", err);
    return [];
  }
}

// ✅ Fetch HTML content on the server
async function getPageHtml(slug) {
  const filePath = path.join(process.cwd(), "src/pages", `${slug}.html`);
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (err) {
    console.error(`Error reading file for slug ${slug}:`, err);
    return null;
  }
}

const CourseCityPage = async ({ params }) => {
  // ✅ Use optional chaining to avoid errors
  const slug = params?.slug;
  if (!slug) {
    console.error("Missing slug parameter.");
    return notFound();
  }

  const htmlContent = await getPageHtml(slug);

  if (!htmlContent) {
    return notFound();
  }

  // ✅ Extract course and city
  const slugParts = slug.split("-");
  const course = slugParts.slice(0, 2).join("-");
  const city = slugParts.slice(2).join("-");

  return (
    <>
      {/* ✅ Render Static HTML for SEO */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      {/* ✅ Render Dynamic Course Component */}
      <ClientOnly>
        <CourseComponentLoader formattedCourse={course.toUpperCase()} city={city} course={course} />
      </ClientOnly>
    </>
  );
};

export default CourseCityPage;
