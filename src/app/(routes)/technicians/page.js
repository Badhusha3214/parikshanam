
"use client"

import Browse_Header from "@/app/components/browse-header"
import { CoordinatorList } from "@/app/components/model-coordinators/coordinator-list";
import { ProfileType } from "@/app/components/filter";
import { SearchBar } from "@/app/components/search-name-location";
import { TechnicianList } from "@/app/components/technician/technician-list";
import { fetchCoordintors } from "@/app/lib/coordinators";
import { fetchTechnicians } from "@/app/lib/technicians";
import { useState } from "react";





export default function page (){
    const technicians = fetchTechnicians;
    const bg = "/technicians/header.png";
    const heading ="Aspiring Technicians" ;

    
  const [filterTechnicians, setFilter] = useState(technicians);

  const handleSearchResults = (name,location) => {
    
    const results = fetchCoordintors(name,location)
    setFilter(results); 
  };



  

    return(
        <>
            <Browse_Header bg={bg} heading={heading}/>
            <section className="md:flex gap-10 pt-section px-section">
               
              
               <div className="w-full">

                    <h2 className="custom-h2 text-fontColor-secondary">Video Editor</h2>
                    <SearchBar  onSearchResults={handleSearchResults}/>
                    <TechnicianList technicians={filterTechnicians}/>
               </div>
            </section>
        </>
    );
}