"use client";

import { useEffect, useRef, useState } from "react";
import { mockFetchMembers } from "@/app/lib/members";
import SearchIcon from "@/app/assets/icons/search.svg";
import { LocationIcon } from "./ui/icons";

export function SearchBar({ onSearchResults, }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const locations = ["Kochi, Kerala", "South Korea", "United States","UK","France","MH, India"];
  const modelRef = useRef();

  const handleSearch = () => {
    // setIsLoading(true);
    // const results = mockFetchMembers(name, location);
    // setIsLoading(false);
    onSearchResults(name,location); 
  };

  const handleSelect = (value) => {
    setLocation(value);
    setIsOpen(false);
  };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  return (
    <div className="flex flex-col sm:flex-row gap-4 px-4 py-12  shadow bg-white w-full">
      <div className="flex flex-1  gap-2  rounded-lg">
        <SearchIcon className='m-auto' />
        <input
          type="text"
          placeholder="Search Member Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border-b-2 md:pb-0  bg-transparent outline-none"
        />
      </div>
      <div className="hidden lg:block h-12 bg-fontColor-secondary/20 w-[1px]" />
      <div className="flex flex-1 gap-2  rounded-lg">
        <LocationIcon className="text-fontColor-secondary/70 size-6 m-auto" />
      
      
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-transparent border-b-2 text-left outline-none relative "
          >
            {location || "Select Location"}
            {isOpen && (
            <ul className="absolute  mt-6 w-60 bg-white border border-gray-300 rounded-lg  shadow-lg z-1000" ref={modelRef}>
              {locations.map((loc) => (
                <li
                  key={loc}
                  onClick={() => handleSelect(loc)}
                  className={`px-4 py-2 my-1 hover:bg-brand cursor-pointer ${
                    location === loc
                      ? "bg-brand"
                      : "text-gray-700"
                  }`}
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
          </button>
       
      </div>
      <button
        onClick={handleSearch}
        disabled={isLoading}
        className="px-6 py-2 bg-black text-white  hover:bg-gray-800 disabled:bg-gray-400"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
