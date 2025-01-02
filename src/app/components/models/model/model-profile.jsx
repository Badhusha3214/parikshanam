"use client";

import Button from "../../ui/Button";
import LocationIcon from "@/app/assets/icons/location.svg";
import PhoneIcon from "@/app/assets/icons/call.svg";
import ShareIcon from "@/app/assets/icons/share.svg";
import MessageIcon from "@/app/assets/icons/message.svg";
import Image from "next/image";
import { BusinessIcon, MenuIcon, UserIcon } from "../../ui/icons";
import { isBrowser } from "@/app/utils/isBrowser";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function ProfileCard({ profile }) {
  return (
    <div className="w-full">
      <div className="h-auto bg-brand-subtle relative">
        <Content profile={profile} />
      </div>
    </div>
  );
}

function Content({ profile }) {
  console.log("profile", profile);
  const handlePhoneClick = () => {
    isBrowser ? (window.location.href = `tel:${profile.phone}`) : null;
  };

  const handleEmailClick = () => {
    isBrowser() ? (window.location.href = `mailto:${profile.email}`) : null;
  };
  const handleShare = async () => {
    if (isBrowser && navigator.share) {
      try {
        await navigator.share({
          title: profile.name,
          text: `Check out ${profile.name}'s profile`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <>
      <div className="px-section py-10 flex flex-col justify-center">
        <div className="py-6 text-fontColor-subtle">
          Models /{" "}
          <span className="text-fontColor-sub-heading">{profile.name}</span>
        </div>
        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div>
            <div className="relative w-40 h-40 lg:h-64 lg:w-64 mx-auto rounded-md overflow-hidden border-2 border-[#1F1F1F1A]">
              <Image
                src={profile.avatar}
                alt={`${profile.name}'s profile picture`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col gap-2  pb-5 mt-5 md:mt-10 ">
              <div className="flex items-center gap-3">
                <h2 className="custom-h2 text-fontColor-sub-heading font-semibold text-nowrap">
                  {profile.name}
                </h2>
                <div className="px-4 py-1 border ">22</div>
              </div>
                <div>
                    <span className="custom-base text-fontColor-subtle">Managed By </span>
                    <span className="custom-base text-fontColor-sub-heading font-medium underline underline-offset-4"><Link href="/model-coordinators/2">Sameeha Mariyam</Link></span>
                </div>
               
              <div className="flex  mt-auto flex-wrap gap-10 ">
                <ProfileNav header="Height" Icon = {ChevronUp} value="145 cm" />
                <ProfileNav header="Weight" Icon = {MenuIcon} value="45 Kg" />
                <ProfileNav header="Gender" Icon = {UserIcon} value="Female" />
                <ProfileNav header="Location" Icon = {LocationIcon} value="Kochi" />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}



function ProfileNav({ header, Icon, value }) {
  return (
    <div className="flex gap-4 items-center">
     
      <div className="relative flex items-center justify-center h-11 w-11">
        <div className="absolute inset-0 bg-black rounded-full"></div>
        <Icon
          className="text-brand absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          size={25}
        />
      </div>

      
      <div>
        <h3 className="custom-base text-fontColor-muted">{header}</h3>
        <h3 className="custom-base text-fontColor-sub-heading font-semibold">{value}</h3>
      </div>
    </div>
  );
}
