"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "@/styles/BlogPage/BlogDetails.module.css";
import Breadcrumb from "@/components/BlogsPage/Breadcrumb";

const BASE_URL = "https://blog-page-panel.onrender.com"; // Change for production

const BlogDetails = () => {
  const { category, id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/blogs/${id}`);
        const data = await response.json();

        if (!response.ok || !data || Object.keys(data).length === 0) 
          throw new Error("Blog not found");

        setBlog({ ...data, category: data.category || category });
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (!blog) return <p className={styles.notFound}>Blog not found.</p>;

  return (
    <div className={styles.blogContainer}>
      {/* Left Side - Blog Content */}
      <div className={styles.blogDetails}>
        <Breadcrumb />

        <h1 className={styles.title}>{blog.title}</h1>

        <div className={styles.metaInfo}>
          <span>By {blog.author}</span> |{" "}
          <span>{blog.date ? new Date(blog.date).toLocaleDateString() : "Unknown Date"}</span>
        </div>

        {blog.subcategory && (
          <p className={styles.subcategory}>
            Category: {category} | Subcategory: {blog.subcategory}
          </p>
        )}

        <img
          src={blog.image?.startsWith("http") ? blog.image : `${BASE_URL}${blog.image}`}
          alt={blog.title}
          className={styles.blogImage}
        />

        <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogDetails;
