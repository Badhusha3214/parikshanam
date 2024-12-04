"use client";

import { useState } from "react";
import { mockFetchMembers } from "@/app/lib/members";
import SearchIcon from "@/app/assets/icons/search.svg";
import { LocationIcon } from "./ui/icons";

export function SearchBar({ onSearchResults }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    const results = mockFetchMembers(name, location);
    setIsLoading(false);
    onSearchResults(results); // Send the filtered results to the parent
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 px-4 py-12 md:items-center  rounded-lg shadow bg-white">
      <div className="flex flex-1 gap-2 px-4 py-2 rounded-lg">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Member Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border-b-2 pb-2 bg-transparent outline-none"
        />
      </div>
      <div className="hidden lg:block h-12 bg-fontColor-secondary/20 w-[1px]" />
      <div className="flex flex-1 gap-2 px-4 py-2 rounded-lg">
        <LocationIcon />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 border-b-2 pb-2 bg-transparent outline-none"
        >
          <option value="">All Locations</option>
          <option value="Kochi, Kerala">Kochi, Kerala</option>
          <option value="South Korea">South Korea</option>
          <option value="United States">United States</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        disabled={isLoading}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
