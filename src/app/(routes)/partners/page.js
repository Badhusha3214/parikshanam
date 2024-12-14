"use client";

import Browse_Header from "@/app/components/browse-header";
import { CoordinatorList } from "@/app/components/model-coordinators/coordinator-list";
import { Filter } from "@/app/components/filter";
import { SearchBar } from "@/app/components/search-name-location";
import { fetchCoordintors } from "@/app/lib/coordinators";
import { useState } from "react";
import { PartnersList } from "@/app/components/partners/partners-list";

export default function page() {
  const Coordinators = fetchCoordintors();
  const bg = "/coordinators/coordinators-header.jpeg";
  const heading = "Model Coordinators";

  const [filteredCoordinators, setFilteredCoordinators] =
    useState(Coordinators);

  const handleSearchResults = (name, location) => {
    const results = fetchCoordintors(name, location);
    setFilteredCoordinators(results);
  };

  let freelancerCount = 0;
  let businessCount = 0;

  filteredCoordinators.forEach((user) =>
    user.userType == "freelancer" ? freelancerCount++ : businessCount++
  );

  const filterCriteria = [
    {
      type: "Profile Type",
      criteria: [
        { id: "business", label: "Business", count: freelancerCount },
        { id: "freelancer", label: "Freelancer", count: businessCount },
      ],
    },
    {
      type: "Experience",
      criteria: [
        { id: "0-1yr", label: "0-1 year", count: "25" },
        { id: "2-5yr", label: "2-5 years", count: "57" },
        { id: "6-10yr", label: "6-10 years", count: "57" },
        { id: "11-15yr", label: "11-15 years", count: "57" },
        { id: "15yr", label: "15+ years", count: "57" },
      ],
    },
  ];

  return (
    <>
      <Browse_Header bg={bg} heading={heading} />
      <section className="md:flex gap-10 pt-section px-section">
        
        <div className="md:w-1/5">
          <Filter filterCriteria={filterCriteria} />
        </div>
        <div className="w-full">

     <h2 className="custom-h2 text-fontColor-sub-heading">Costume Stylists</h2>
          <SearchBar onSearchResults={handleSearchResults} />
          <PartnersList partners={filteredCoordinators}/>
        </div>
      </section>
    </>
  );
}
