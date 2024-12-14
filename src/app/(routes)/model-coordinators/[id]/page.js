"use client";

import Characteristics from "@/app/components/characterisitics";
import Links from "@/app/components/links";
import Summary from "@/app/components/summary";
import ProfileCard from "@/app/components/model-coordinators/coordinator/coordinator-profile";
import { ModelList } from "@/app/components/model-coordinators/coordinator/model-list";
import ShowReel from "@/app/components/show-reel";
import { fetchCoordinatorById } from "@/app/lib/coordinators";
import { useParams } from "next/navigation";
import { fetchModels } from "@/app/lib/models";


const page = ({ params }) => {
  const { id } = useParams();

  const coordinator = fetchCoordinatorById(id);

  if (!coordinator) {
    return <p>Coordinator not found!</p>;
  }


  const models = fetchModels() 
  
 
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

  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <ProfileCard profile={coordinator} />
        <div className="py-section px-section space-y-8">
          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-12">
            <div className=" space-y-8 lg:col-span-2">
              <Summary heading="About" summary={coordinator.summary} />
              <ShowReel
                videoId={coordinator.showReelId}
                description={
                  "Watch the Audition video of the model to get an idea if your requirements align with model’s capabilities."
                }
              />
            </div>

            <div className="lg:col-span-1 space-y-8">
              <Characteristics data={data} />
              <Links
                header="Links"
                description="Stripe offices spread across 20 countries"
                links={coordinator.links}
              />
            </div>
          </div>
          <div>
            <ModelList models={models} />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
