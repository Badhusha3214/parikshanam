import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const IndustryResources = () => {
  const [selectedResource, setSelectedResource] = useState(0);

  const resources = [
    {
      title: "Model Bank",
      description: "Lacinia ornare magna penatibus adipiscing laoreet tempus.",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Preferred Partners",
      description: "Lacinia ornare magna penatibus adipiscing laoreet tempus.",
      borderColor: "border-gray-200",
      bgColor: "bg-white"
    },
    {
      title: "Aspiring Technicians",
      description: "Lacinia ornare magna penatibus adipiscing laoreet tempus.",
      borderColor: "border-gray-200",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-left mb-12">
        <span className="inline-block border-2 border-gray-400 font-bold px-6 py-2  text-pn sm:text-tn md:text-normal rounded-xl text-sm mb-4">
          Our Industry Resources
        </span>
        <h2 className="text-ph sm:text-th lg:text-mid xl:text-large font-bold">Choose From The Best</h2>
        <p className="text-pn sm:text-tn lg:text-tn xl:text-normal text-gray-700 mt-4 max-w-6xl">
          Lacinia ornare magna penatubus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris.
          Lacinia ornare magna penatubus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image visible on mobile at the top */}
        <div className="block md:hidden mb-8 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-image-${selectedResource}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/OIR.svg"
                alt="OIR"
                width={500}
                height={400}
                className="w-4/5 max-w-md h-auto rounded-xl mx-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-6 relative">
          {/* Continuous yellow line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400 z-0 opacity-30" />
          
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className={`
                relative z-10 border-l-4 p-6 cursor-pointer transition-all duration-300
                ${selectedResource === index 
                  ? `${resource.borderColor} ${resource.bgColor} shadow-lg` 
                  : 'border-gray-200 hover:border-gray-400 bg-white'}
              `}
              onClick={() => setSelectedResource(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active yellow line segment */}
              {selectedResource === index && (
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-[-2px] bottom-0 top-0 w-1 bg-yellow-400"
                />
              )}

              <h3 className="text-pch sm:text-pch lg:text-cdh xl:text-cdh font-bold mb-4">
                {resource.title}
              </h3>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={`desc-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-pn sm:text-tn lg:text-tn xl:text-normal text-gray-700 mb-4"
                >
                  {resource.description}
                </motion.p>
              </AnimatePresence>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-pn sm:text-tn lg:text-tn xl:text-normal border-2 border-gray-400 text-black font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
              >
                Learn More
                <Image
                  src="/NextButton.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        {/* Image visible on desktop on the right side */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${selectedResource}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/OIR.svg"
                alt="OIR"
                width={500}
                height={400}
                className="w-4/5 h-auto rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default IndustryResources;