"use client"
import { Suspense, useState } from "react";
import Browse_Header from "@/app/components/browse-header";
import { SearchBar } from "@/app/components/search-name-location";
import { fetchAllMembers } from "@/app/lib/members";
import { ProfileList } from "@/app/components/members/profiles-list";
import {  usePagination } from "@/app/contexts/PaginationContext";


export default function Page() {
  const allMembers = fetchAllMembers();
  const { pagination, setPaginationDetails } = usePagination();

 

  const bg = "https://s3-alpha-sig.figma.com/img/31de/df3a/f4acc261732b0ca38d4b4c7634a5ec70?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3-En~PweIVn9G~rOEEEgZtx71Jw1jZ4-VL3uravT3LzP1RGZd4fLLdyqcLoEbsgciswsVR84EG9BfkcNQLN6DYhsgb5M-8w00~hbRMdqZaHa~Cw-rhXMbNQzjqJt0WaY90KyusHHR8QVl8fwsHH1TegyGa7jY6No0DuBr9-79ZZCLBrc2Cj7uRfEg4RIlsJ3hT7Wr2iv2ktKihsVifNE-EVTggMIMzDDlkxrEeywvh-gBWmfeUwYUOH8rdhT8KYjNExQGvPJq2qQ-inaUlPAxXY5mAS16fyrYdBKiQrDuqX3O1E7YflkUdSx-8dHfWLCycWu4VGvL0ppF-lNKtKpA__";

  const [filteredMembers, setFilteredMembers] = useState(allMembers);

  const handleSearchResults = (results) => {
    setFilteredMembers(results); 
  };

  return (
    
  
      <main className="bg-gray-50/50">
        <Browse_Header bg={bg} heading="The IAMians" />
        <div className="px-section pt-10">
          <SearchBar onSearchResults={handleSearchResults} />
        </div>
        <Suspense fallback={<p>Loading members...</p>}>
          <ProfileList profiles={filteredMembers} />
        </Suspense>
      </main>
   
  );
}
