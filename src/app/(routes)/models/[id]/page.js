"use client";

import Characteristics from "@/app/components/characterisitics";
import Links from "@/app/components/links";
import Summary from "@/app/components/summary";

import ShowReel from "@/app/components/show-reel";
import { fetchCoordinatorById } from "@/app/lib/coordinators";
import { useParams } from "next/navigation";
import { fetchModelsById } from "@/app/lib/models";
import ProfileCard from "@/app/components/models/model/model-profile";
import { WorkTypes } from "@/app/components/models/model/work-types";


const page = ({ params }) => {
  const { id } = useParams();

  const coordinator = fetchCoordinatorById(id);

  
  const models = fetchModelsById(1)
 
  if (!models) {
    return <p>Coordinator not found!</p>;
  }

   const data = coordinator.userType == "business"? {
 
  Experience: '5 years',
  Established: '2019',
  Models: '100+',
  'Reg. Type': 'PVT LTD',
}: {
 
  Experience: '5 years',
  Since: '2019',
  Models: '100+',
  Age: '54',
}


  const workTypes = [
   
    { name: "Acting", accepted: true },
    { name: "Print Shoot", accepted: true },
    { name: "Saree Shoot", accepted: true },
    { name: "Lehenga Shoot", accepted: true },
    { name: "Ramp Shows", accepted: true },
    { name: "Designer Shoots", accepted: true },
    { name: "Ethnic Wear", accepted: true },
    { name: "Western Wear", accepted: true },
    { name: "Indian Wear", accepted: true },
    { name: "Skirts", accepted: true },
    { name: "Music Albums", accepted: true },
    { name: "Dancing", accepted: true },
    { name: "Anchoring", accepted: true },
    { name: "Web Series", accepted: true },
    { name: "Action & Stunt", accepted: true },
    { name: "Romantic Scenes", accepted: true },
    
   
    { name: "Shorts", accepted: false },
    { name: "Bikini Shoots", accepted: false },
    { name: "Lingerie Shoots", accepted: false },
    { name: "Swim Shoots", accepted: false },
    { name: "Calendar Shoots", accepted: false },
    { name: "TV Serials", accepted: false },
    { name: "Kissing Scene", accepted: false },
    { name: "Singing", accepted: false },
  ]


  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <ProfileCard profile={models}/>
        <div className="py-section px-section space-y-8">
          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-12">
            <div className=" space-y-8 lg:col-span-2">
              <Summary heading="About" summary={models.summary} />
              <ShowReel
                videoId={models.showReelId}
                description={
                  "Watch the Audition video of the model to get an idea if your requirements align with model’s capabilities."
                }
              />
              <WorkTypes workTypes={workTypes}/>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <Characteristics data={data} />
              <Links
                header="Links"
                description="Stripe offices spread across 20 countries"
                links={models.links}
              />
            </div>
          </div>
          <div>
           
          </div>
        </div>
      </main>
    </>
  );
};

export default page;


