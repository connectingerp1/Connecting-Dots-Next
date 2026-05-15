// components/CourseLoader.js

"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "./Loader";

const CourseLoader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const coursePathPatterns = [
      "/it-course",
      "/hr-",
      "/sap-",
      "/digital-marketing",
      "/data-visualization",
    ];

    const isCoursePage = (path) =>
      coursePathPatterns.some((pattern) => path?.toLowerCase().includes(pattern));

    if (isCoursePage(pathname)) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }

    setLoading(false);
  }, [pathname, searchParams]);

  return loading ? <Loader /> : null;
};

export default CourseLoader;
