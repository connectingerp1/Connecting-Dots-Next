"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/BlogPage/BlogsPage.module.css";
import Breadcrumb from "@/components/BlogsPage/Breadcrumb";
import CategoryFilter from "@/components/BlogsPage/CategoryFilter";

const BASE_URL = "https://blog-page-panel.onrender.com";

const BlogsPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");  

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch unique categories from blogs
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/blogs`);
      const data = await response.json();

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(data.map((blog) => blog.category))
      );

      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="p-4">
      <div className={styles.blogsPage}>
        <Breadcrumb />
        <h1>Lets start career with the following domains</h1>

        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default BlogsPage;
