import React, { useState, useEffect } from "react";

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

const Message = ({ authors = [], interval = 5000 }) => {
  const [index, setIndex] = useState(0);

  // Cycle through authors
  useEffect(() => {
    if (authors.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % authors.length);
    }, interval);

    return () => clearInterval(timer);
  }, [authors, interval]);

  if (authors.length === 0) return null;

  const author = authors[index];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-base-100">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Author info */}
        <div className="flex flex-col items-start">
          <img
            src={author?.authorImage}
            alt={author?.authorName || "Author"}
            className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
          />

          <blockquote className="text-xl italic font-light text-gray-700 border-l-4 border-primary pl-4 mb-4">
            “{author?.authorMessage || "No message available"}”
          </blockquote>

          <p className="font-semibold text-lg">
            {author?.authorName || "No Name"}
          </p>
          <p className="text-gray-500">{author?.authorTitle || "No Title"}</p>
          {author?.authorDivision && (
            <p className="mt-2 text-sm text-gray-400">
              {author.authorDivision}
            </p>
          )}
        </div>

        {/* Right side - Full message */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Message</h2>
          <p className="text-gray-700 leading-relaxed">
            {author?.fullMessage || "No full message available."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Message;
