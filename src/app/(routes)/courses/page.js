import dynamic from 'next/dynamic';

// Import client component without SSR disabled
const BlogPageClient = dynamic(
  () => import('./Blogpage'),
  { ssr: true }
);

export const metadata = {
  title: 'Explore Learning Content | Blogs & Interview Questions',
  description:
    'Browse blogs and interview questions across multiple courses. Learn, prepare, and grow with curated educational content.',
};

export default function BlogPage() {
  return (
    <>
      {/* SEO-visible H1 for page source */}
      <h1 className="sr-only">
        Explore Learning Content – Blogs and Interview Questions
      </h1>

      <BlogPageClient />
    </>
  );
}
