
"use client"

import Browse_Header from "@/app/components/browse-header"
import { CoordinatorList } from "@/app/components/model-coordinators/coordinator-list";
import { Filter } from "@/app/components/filter";
import { SearchBar } from "@/app/components/search-name-location";
import { fetchCoordintors } from "@/app/lib/coordinators";
import { useState } from "react";





export default function page (){
    const Coordinators = fetchCoordintors();
    const bg = "/coordinators/coordinators-header.jpeg";
    const heading ="Model Coordinators" ;

    
  const [filteredCoordinators, setFilteredCoordinators] = useState(Coordinators);

  const handleSearchResults = (name,location) => {
    
    const results = fetchCoordintors(name,location)
    setFilteredCoordinators(results); 
  };

  let freelancerCount = 0 ;
  let businessCount = 0;

  filteredCoordinators.forEach((user) => (
    user.userType == "freelancer" ? freelancerCount++ : businessCount++ 
  ))

  const filterCriteria = [
    {
      type: "Profile Type",
      criteria: [
        { id: "business", label: "Business", count: freelancerCount },
        { id: "freelancer", label: "Freelancer", count: businessCount },
      ],
    },
   
  ];
  

    return(
        <>
            <Browse_Header bg={bg} heading={heading}/>
            <section className="md:flex gap-10 pt-section px-section">
                <div className="md:w-1/5">
                    <Filter filterCriteria={filterCriteria}/>
                </div>
               <div className="w-full">
                    <SearchBar  onSearchResults={handleSearchResults}/>
                    <CoordinatorList coordinators={filteredCoordinators}/>
               </div>
            </section>
        </>
    );
}