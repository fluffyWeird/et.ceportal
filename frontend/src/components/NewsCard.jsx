import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const NewsCard = ({ newsItems = [] }) => {
  const [index, setIndex] = useState(0);
  const visibleCount = 3; // number of cards visible

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? newsItems.length - visibleCount : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev + visibleCount >= newsItems.length ? 0 : prev + 1
    );
  };

  return (
    <div className="relative py-8 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>

      <div className="relative overflow-hidden">
        {/* Slide container */}
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${index * (100 / visibleCount)}%` }}
          transition={{ type: "tween", duration: 0.8 }}
          style={{ width: `${(newsItems.length / visibleCount) * 100}%` }}
        >
          {newsItems.map((news, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[calc(100%/3)] md:w-[calc(100%/3)]"
            >
              <div className="card bg-base-100 shadow-md p-4 rounded-lg h-full flex flex-col">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-32 md:h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{news.summary}</p>
                <p className="text-gray-400 text-xs mt-auto">{news.date}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
