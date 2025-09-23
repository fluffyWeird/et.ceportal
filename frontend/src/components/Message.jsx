import React from "react";

const Message = ({
  authorImage = "https://picsum.photos/100/100", // default placeholder
  authorMessage = "A short inspirational message from the author goes here.",
  authorName = "John Doe",
  authorTitle = "CEO, MyBlogCMS",
  authorDivision = "Creative Division",
  fullMessage = "This is the full message content written by the author. It can be several paragraphs long and gives detailed insight into their thoughts, vision, or purpose.",
}) => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-base-100">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Author info */}
        <div className="flex flex-col items-start">
          {/* Author Image */}
          <img
            src={authorImage}
            alt={authorName}
            className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
          />

          {/* Author Message */}
          <blockquote className="text-xl italic font-light text-gray-700 border-l-4 border-primary pl-4 mb-4">
            “{authorMessage}”
          </blockquote>

          {/* Author Name + Title */}
          <p className="font-semibold text-lg">{authorName}</p>
          <p className="text-gray-500">{authorTitle}</p>

          {/* Division */}
          <p className="mt-2 text-sm text-gray-400">{authorDivision}</p>
        </div>

        {/* Right side - Full message */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Message</h2>
          <p className="text-gray-700 leading-relaxed">{fullMessage}</p>
        </div>
      </div>
    </section>
  );
};

export default Message;
