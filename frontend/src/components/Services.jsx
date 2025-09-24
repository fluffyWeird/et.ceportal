import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

const Services = ({ servicesItems }) => {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  if (!servicesItems.length)
    return <p className="text-center py-8">No services available</p>;

  const prevSlide = () =>
    setIndex((prev) =>
      prev - 1 < 0 ? servicesItems.length - visibleCount : prev - 1
    );

  const nextSlide = () =>
    setIndex((prev) =>
      prev + visibleCount >= servicesItems.length ? 0 : prev + 1
    );

  return (
    <div id="service" className="relative py-8 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-4">Services</h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-3"
          animate={{ x: `-${index * (100 / visibleCount)}%` }}
          transition={{ type: "tween", duration: 0.8 }}
          style={{ width: `${(servicesItems.length / visibleCount) * 100}%` }}
        >
          {servicesItems.map((service, idx) => (
            <div
              key={idx}
              className="lg:flex-shrink-0 lg:w-[calc(100%/2)] md:w-[calc(100%/2)]"
            >
              <div className="card bg-base-100 shadow-md p-3 rounded-lg h-full flex flex-col">
                <img
                  src={`${BACKEND_URI}${service.image}`}
                  alt={service.title}
                  className="w-full h-32 md:h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{service.summary}</p>
              </div>
            </div>
          ))}
        </motion.div>

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

export default Services;
