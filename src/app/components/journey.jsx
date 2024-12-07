'use client'
import React, { useState } from 'react';

const IAMJourney = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const journeyItems = [
    { 
      year: '2001', 
      title: 'Laid the Foundation',
      description: 'Our organization took its first steps, establishing a vision of innovation, collaboration, and meaningful impact. We began with a small team of passionate individuals committed to creating positive change.'
    },
    { 
      year: '2005', 
      title: 'First Member Joined',
      description: 'A pivotal moment arrived when our first dedicated member joined, bringing fresh perspectives and energy. This milestone marked the beginning of our community-driven approach and signaled the potential for growth.'
    },
    { 
      year: '2020', 
      title: 'Crossed 50 Mark',
      description: 'A significant achievement as our community expanded to over 50 members. This growth represented not just numbers, but a diverse network of professionals united by a shared mission and collaborative spirit.'
    },
    { 
      year: '2022', 
      title: 'First Office',
      description: 'We established our first physical office, creating a central hub for collaboration, innovation, and community engagement. This space symbolized our commitment to creating a tangible platform for our collective goals.'
    }
  ];

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto md:mb-80 px-8 ">
      <h2 className="text-4xl font-bold mb-12 animate-fade-in">THE IAM Journey</h2>
      <div className="space-y-6">
        <p className="text-gray-600 mb-12 text-lg animate-slide-in-right">
          Our journey is a testament to growth, innovation, and collective achievement. 
          Each milestone represents a step forward in our mission to create meaningful impact.
        </p>
        {journeyItems.map((item, index) => (
          <div 
            key={index} 
            className={`
              border rounded-lg p-6 cursor-pointer 
              transition-all duration-500 ease-in-out
              transform hover:scale-[1.02] hover:shadow-lg
              ${expandedIndex === index ? 'bg-gray-50 border-blue-200' : 'bg-white'}
              animate-slide-in-right
            `}
            style={{ animationDelay: `${index * 200}ms` }}
            onClick={() => toggleDescription(index)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`
                  text-xl font-bold 
                  transition-colors duration-300
                  ${expandedIndex === index ? 'text-blue-600' : 'text-gray-800'}
                `}>
                  {item.year}: {item.title}
                </h3>
                <div 
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${expandedIndex === index 
                      ? 'max-h-96 opacity-100 mt-4'
                      : 'max-h-0 opacity-0 mt-0'}
                  `}
                >
                  <p className="text-gray-600 text-base">
                    {item.description}
                  </p>
                </div>
              </div>
              <button 
                className={`
                  text-3xl transition-transform duration-500 ease-in-out
                  ${expandedIndex === index ? 'rotate-90 text-blue-600' : 'rotate-0'}
                `}
              >
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IAMJourney;