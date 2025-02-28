"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/BlogPage/Components/BlogHorizontal.module.css";

const BlogHorizontal = ({ blog, BASE_URL }) => {
  return (
    <Link href={`/blogs/${blog._id}`} className={styles.blogLink}>
      <div className={styles.blogHorizontal}>
        <Image
          src={blog.image?.startsWith("http") ? blog.image : `${BASE_URL}${blog.image}`}
          alt={blog.title}
          className={styles.blogImage}
          width={350}
          height={200}
        />
        <div className={styles.blogContent}>
          <h2 className={styles.blogTitle}>{blog.title}</h2>
          <p className={styles.blogAuthor}>By {blog.author}</p>
          <p className={styles.blogDescription}>
            {blog.content.slice(0, 150)}...
          </p>
          <span className={styles.readMore}>Read More →</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogHorizontal;
