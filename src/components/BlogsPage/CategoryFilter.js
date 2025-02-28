"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "@/styles/BlogPage/Components/CategoryFilter.module.css";

const CategoryFilter = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCategoryClick = (category) => {
    if (category === "all") {
      router.push("/blogs"); // Redirect to the main blogs page
    } else {
      router.push(`/blogs/${encodeURIComponent(category)}`); // Redirect to the category page
    }
  };

  return (
    <div className={styles.categoryFilter}>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          className={pathname === `/blogs/${category}` ? styles.active : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
