"use client";


import Button from "../../ui/Button";
import LocationIcon from '@/app/assets/icons/location.svg';
import PhoneIcon from '@/app/assets/icons/call.svg';
import ShareIcon from '@/app/assets/icons/share.svg';
import MessageIcon from '@/app/assets/icons/message.svg';
import Image from "next/image";
import { isBrowser } from "@/app/utils/isBrowser";

export default function ProfileCard({ member }) {
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
    <div className="w-full bg-white">
      <div className="h-80 lg:h-96 bg-brand overflow-hidden relative">
        <Image
          fill
          src = "/members/member-header.jpeg"
          alt="Profile banner"
          className="w-full  h-full object-cover"
        />
      </div>
      <div className="px-section ">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 mx-auto">
            <div className="w-44 h-44 lg:h-72 lg:w-72 -mt-20 sm:-mt-14 rounded-full overflow-hidden border-2 border-[#1F1F1F1A] relative">
              <Image
                fill
                src="/members/member-4.png"
                alt={`${member.name}'s profile picture`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="space-y-1 ">
              <h2 className="custom-h2 text-fontColor-heading font-bold pt-5 md:pt-5">
                {member.name}
              </h2>
              <p className="custom-h3 font-normal text-fontColor-tertiary">{member.company}</p>
              <div className="flex">
                <LocationIcon className=" text-brand size-6 me-2 -ms-1 font-normal my-auto" />
                <span className="custom-base font-normal text-fontColor-primary">
                  {member.address.city}, {member.address.state}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button onClick={handlePhoneClick} size="md">
                <PhoneIcon className="mr-2" />
                {member.phone}
              </Button>
              <Button onClick={handleEmailClick} size="md">
                <MessageIcon className="w-[18px] h-[18px]" />
              </Button>
              <Button onClick={handleShare} className='hover:bg-brand-subtle' variant="secondary" size="md">
                <ShareIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
