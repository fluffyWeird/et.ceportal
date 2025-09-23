import React from "react";
import { motion } from "framer-motion";

const StatusBar = ({ stats = [] }) => {
  return (
    <section className="py-12 bg-base-200 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-base-100 p-6 rounded-lg shadow-md">
            <motion.div
              className="text-4xl font-bold text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.3 }}
            >
              <AnimatedNumber value={stat.value} />
            </motion.div>
            <p className="mt-2 text-gray-600">{stat.key}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Animated number component
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1200; // total duration in ms
    const increment = value / (duration / 30); // update every 30ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, [value]);

  return count.toLocaleString();
};

export default StatusBar;
