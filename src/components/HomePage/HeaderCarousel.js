"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import HeaderCarousel3 from "./HeaderCarousel2";

const CareerHeroSlide = dynamic(() => import("./HeaderCarousel1"), {
  ssr: false,
  loading: () => null,
});

const QuizComponent = dynamic(() => import("./HeaderCarousel3"), {
  ssr: false,
  loading: () => null,
});

// Dynamically import Btnform with SSR disabled
const Btnform = dynamic(() => import('./Btnform'), { ssr: false });

const HeaderCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mountedSlides, setMountedSlides] = useState(() => new Set([0]));
  const [quizReady, setQuizReady] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = useCallback(() => {
    setShowForm(prev => !prev);
  }, []);

  const handleReady = useCallback(() => {
    setQuizReady(true);
  }, []);

  const SLIDE_COUNT = 3;
 
  useEffect(() => {
    setMountedSlides((prev) => {
      if (prev.has(currentSlide)) return prev;
      const next = new Set(prev);
      next.add(currentSlide);
      return next;
    });

    const currentTiming = currentSlide === 2 ? 40000 : 20000;
 
    if (currentSlide === 2 && !quizReady) {
      return;
    }
 
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT);
      setQuizReady(false);
    }, currentTiming);
 
    return () => clearInterval(interval);
  }, [currentSlide, quizReady]);
 
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setQuizReady(false);
  };

  // Pre-generate an array for the dots to avoid recreating it
  const dots = useMemo(() => Array.from({ length: SLIDE_COUNT }), []);

  return (
    <div className="w-full max-w-[1800px] mx-auto overflow-hidden relative">
      {/* ✅ FIXED: Mobile-optimized carousel container */}
      <div className="relative min-h-[650px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[800px] bg-white overflow-hidden">
        {/* Slide content */}
        
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div className="w-full h-full">
            <HeaderCarousel3 onReady={handleReady} />
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {mountedSlides.has(1) && (
            <div className="w-full h-full">
              <CareerHeroSlide onOpenForm={toggleForm} onReady={handleReady} />
            </div>
          )}
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {mountedSlides.has(2) && (
            <div className="w-full h-full">
              <QuizComponent onReady={handleReady} />
            </div>
          )}
        </div>
        
        {/* ✅ FIXED: Better positioned dots for mobile */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-0 right-0 z-20">
          <div className="flex justify-center gap-1 sm:gap-2">
            {dots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 before:block before:rounded-full before:content-[''] ${
                  currentSlide === index
                    ? "before:h-3 before:w-3 before:bg-black before:ring-2 before:ring-white/50 before:ring-offset-2"
                    : "before:h-2.5 before:w-2.5 before:bg-black/50 hover:before:bg-black/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Btnform Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <Btnform onClose={toggleForm} />
          </div>
        </div>
      )}
    </div>
  );
};
 
export default HeaderCarousel;
