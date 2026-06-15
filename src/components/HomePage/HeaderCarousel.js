"use client";
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

const CareerHeroSlide = dynamic(() => import("./HeaderCarousel1"), {
  ssr: false,
  loading: () => null,
});

const Btnform = dynamic(() => import('./Btnform'), { ssr: false });

const HeaderCarousel = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = useCallback(() => {
    setShowForm(prev => !prev);
  }, []);

  return (
    <div className="w-full max-w-[1800px] mx-auto overflow-hidden relative">
      <div className="relative min-h-[650px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[800px] bg-white overflow-hidden">
        <div className="w-full h-full">
          <CareerHeroSlide onOpenForm={toggleForm} />
        </div>
      </div>

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
