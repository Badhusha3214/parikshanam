
"use client"

import { Filter } from "@/app/components/filter";
import { SearchBar } from "@/app/components/search-name-location";
import { fetchCoordintors } from "@/app/lib/coordinators";
import { useState } from "react";
import Browse_Header from "@/app/components/models/browse-models-header";
import ModelSlider from "@/app/components/models/model-coordinators";
import { ModelList } from "@/app/components/models/model-list"
import { fetchModels } from "@/app/lib/models";





export default function page (){
    const Coordinators = fetchCoordintors();
    const bg = "/models/models-header.jpeg";
    const heading ="Find your Dream Model" ;

   const models = fetchModels() 
   
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
      type: "Managed By",
      criteria: [
        { id: "business", label: "Tharik Shamsu", count: freelancerCount },
        { id: "freelsasncesr", label: "Kirel Creations", count: businessCount },
        { id: "freelsasncer", label: "Kirel Creations", count: businessCount },
        { id: "fsreeslancer", label: "Kirel Creations", count: businessCount },
      ],
    },
    {
      type: "Tags",
      criteria: [
        { id: "0-1yr", label: "Child Artist", count: "25" },
        { id: "2-ss5yr", label: "Teen", count: "57" },
        { id: "6-s10yr", label: "Adult", count: "57" },
        { id: "11s-15yr", label: "Senior", count: "57" },
        { id: "15ssyr", label: "Fitness", count: "57" },
        { id: "0-s1yr", label: "Fashion", count: "25" },
        { id: "2-s5yr", label: "Runway", count: "57" },
        { id: "6-10yr", label: "Plus-Size", count: "57" },
        { id: "1ssss1-15yr", label: "Swim Wear", count: "57" },
        { id: "1s5yr", label: "Ethnic Wear", count: "57" },
        { id: "1dd5yr", label: "Anchor", count: "57" },
        { id: "1d5yr", label: "Influencer", count: "57" },
      ],
    },
    {
      type: "Age",
      criteria: [
        { id: "0-1ddyr", label: "0-10", count: "25" },
        { id: "2-5ddyr", label: "11-18", count: "57" },
        { id: "6-10ddyr", label: "19-30", count: "57" },
        { id: "11-1dd5yr", label: "30-40", count: "57" },
        { id: "15yddr", label: "40-50", count: "57" },
        { id: "15dyr", label: "50-above", count: "57" },
      ],
    },
    {
      type: "Gender",
      criteria: [
        { id: "0-1yr", label: "Female", count: "25" },
        { id: "2-5ddddyr", label: "Male", count: "57" },
        { id: "6-1dd0yr", label: "Non Binary", count: "57" },
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
                    <ModelSlider coordinators={filteredCoordinators}  />
                    <ModelList models={models}/>
               </div>
            </section>
        </>
    );
}