"use client";

import Link from "next/link";
import styles from "@/styles/BlogPage/Components/BlogCard.module.css";

const BlogCard = ({ blog, BASE_URL }) => {
  return (
    <div className={styles.blogCard}>
      <Link href={`/blogs/${blog.category}/${blog._id}`} className={styles.linkTag}>
        <div className={styles.imageContainer}>
          <img
            src={blog.image?.startsWith("http") ? blog.image : `${BASE_URL}${blog.image}`}
            alt={blog.title}
            className={styles.blogImage}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{blog.title}</h2>
          <p className={styles.blogAuthor}>By {blog.author}</p>
          <div className={styles.blogDescription} dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 150) }}></div>
          <span className={styles.readMore}>Read More →</span>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
