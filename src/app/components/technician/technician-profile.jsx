"use client";

import LocationIcon from "@/app/assets/icons/location.svg";
import PhoneIcon from "@/app/assets/icons/call.svg";
import ShareIcon from "@/app/assets/icons/share.svg";
import MessageIcon from "@/app/assets/icons/message.svg";
import Image from "next/image";
import Button from "../ui/Button";
import { UserIcon } from "../ui/icons";

export default function TechnicianProfileCard({ technician }) {

  const handlePhoneClick = () => {
    if(isBrowser()){
    window.location.href = `tel:${member.phone}`;
    }
  };

  const handleEmailClick = () => {
    if(isBrowser()){
    window.location.href = `mailto:${member.email}`;
    }
  };

  const handleShare = async () => {
    if(isBrowser()) return null
    if (navigator.share) {
      try {
        await navigator.share({
          title: member.name,
          text: `Check out ${member.name}'s profile`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };
  return (
    <div className="w-full bg-white px-section pt-20">
      <div className="h-40 lg:h-64 bg-brand overflow-hidden relative">
        <Image
          fill
          src="/technicians/technician-header.jpeg"
          alt="Profile banner"
          className="w-full  h-full object-cover"
        />
      </div>
      <div className="">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 mx-auto">
            <div className="w-44 h-44 lg:h-64 lg:w-64 -mt-20 sm:-mt-28 rounded-full overflow-hidden border-4 border-white relative">
              <Image
                fill
                src="/members/member-4.png"
                alt={`${technician.name}'s profile picture`}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="space-y-2">
              <h1 className="custom-h1 text-fontColor-heading font-bold pt-5 md:pt-5">
                {technician.name}
              </h1>
              <div className="flex gap-10">
                <div className="flex">
                  <UserIcon className=" text-brand size-6 me-2 -ms-1 font-normal my-auto" />
                  <span className="custom-base font-normal text-fontColor-primary">
                    {technician.role}
                  </span>
                </div>
                <div className="flex">
                  <LocationIcon className=" text-brand size-6 me-2 -ms-1 font-normal my-auto" />
                  <span className="custom-base font-normal text-fontColor-primary">
                    {technician.address.city}, {technician.address.state}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button onClick={handlePhoneClick} size="md">
                <PhoneIcon className="mr-2" />
                {technician.phone}
              </Button>
              <Button onClick={handleEmailClick} size="md">
                <MessageIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
