import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = ({
  slides = [],
  interval = 5000, // 5 seconds
}) => {
  const [index, setIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Background images with fade animation */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          alt={slides[index].title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            {slides[index].title}
          </h1>
          <p className="mt-4 text-lg md:text-xl">{slides[index].subtitle}</p>
          <button className="btn btn-primary mt-6">
            {slides[index].buttonText || "Learn More"}
          </button>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index
                ? "bg-primary scale-110"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
