"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function Filter({ filterCriteria }) {
  const [openSections, setOpenSections] = useState({});
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleType = (typeId) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((id) => id !== typeId)
        : [...prev, typeId]
    );
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  
  useEffect(() => {

   for (let index = 0; index < filterCriteria.length; index++) {
    toggleSection(index)
  }

  }, [])
  

  return (
    <div>
      {filterCriteria &&
        filterCriteria.map((section, i) => (
          <div className="w-full" key={i}>
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex items-center justify-between px-4 pb-4 text-left"
            >
              <span className="custom-base font-bold text-fontColor-secondary">
                {section.type}
              </span>
              <ChevronUp
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openSections[i] ? "" : "rotate-180"
                }`}
              />
            </button>

            {openSections[i] && (
              <div className="px-4 pb-4 space-y-2">
                {section.criteria.map((type) => (
                  <label
                    key={type.id}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type.id)}
                      onChange={() => toggleType(type.id)}
                      className="w-5 h-5 border-2 border-gray-300 rounded accent-brand text-white"
                    />
                    <span className="flex-1 text-gray-600">
                      {type.label} ({type.count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
