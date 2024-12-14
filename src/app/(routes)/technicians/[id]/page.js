"use client"

import ProfileCard from "@/app/components/members/member/member-profile";
import { useParams } from "next/navigation";
import Head from "next/head";
import Summary from "@/app/components/summary";
import { Awards } from "@/app/components/members/member/awards";
import Languages from "@/app/components/languages";
import ShowReel from "@/app/components/show-reel";
import Links from "@/app/components/links";
import { Works } from "@/app/components/works";
import {Gallery}  from "@/app/components/gallary";
import { fetchTechnicianById } from "@/app/lib/technicians";
import TechnicianProfileCard from "@/app/components/technician/technician-profile";



const page = ({ params }) => {
  const { id } = useParams();

  const technicianData = fetchTechnicianById(id);

  ;

 if (!technicianData) {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>The requested technician with ID {id} could not be found.</p>
      </div>
    );
  }

  return (
    <>

      <Head>
        <title>Profile of technician {id}</title>
        <meta name="description" content={`Details of Member ${id}`} />
      </Head>
      <main className="max-w-screen-2xl mx-auto">
      

      <TechnicianProfileCard technician = {technicianData}/>
      <div className="py-section px-section space-y-8">
        <div className="grid lg:grid-cols-3 gap-x-16 gap-y-12">
          <div className=" space-y-8 lg:col-span-2">

            <Summary heading="Introduction?" summary={"I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' needs and exceeds their expectations. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' needs and exceeds their expectations."} />
            <ShowReel videoId={technicianData.showReelId}  />

          </div>

          <div className="lg:col-span-1 space-y-8">
           
            <Links header='Links' description='Stripe offices spread across 20 countries' links={technicianData.links} />
          </div>



        </div>
        <div className="grid grid-cols-3 gap-x-16 gap-y-12">
          <div className="col-span-3 lg:col-span-2 space-y-8">
              <Works/>
              <Gallery/>
          </div>
          

          
        </div>
      </div>
     
      </main>

    </>
  );
};

export default page;

