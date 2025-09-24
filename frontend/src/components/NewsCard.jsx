import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
const NewsCard = ({ newsItems = [] }) => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <>
      {/* --- News Grid --- */}
      <div
        id="news"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
      >
        {newsItems.map((news, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md p-4 rounded-lg cursor-pointer hover:shadow-xl transition"
            onClick={() => setSelectedNews(news)}
          >
            <img
              src={`${BACKEND_URI}${news.image}`}
              alt={news.title}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="font-bold text-lg">{news.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3">{news.summary}</p>
          </div>
        ))}
      </div>

      {/* --- Modal --- */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background blur */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedNews(null)}
            />

            {/* Modal content */}
            <motion.div
              className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 z-10 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={`${BACKEND_URI}${selectedNews.image}`}
                alt={selectedNews.title}
                className="w-full h-FULL object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedNews.title}</h2>
              <p className="text-gray-700 mb-4">{selectedNews.date}</p>
              <p className="text-gray-600">{selectedNews.summary}</p>
              <button
                className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                onClick={() => setSelectedNews(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewsCard;
