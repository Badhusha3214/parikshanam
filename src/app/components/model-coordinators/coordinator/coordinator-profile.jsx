"use client";

import Button from "../../ui/Button";
import LocationIcon from "@/app/assets/icons/location.svg";
import PhoneIcon from "@/app/assets/icons/call.svg";
import ShareIcon from "@/app/assets/icons/share.svg";
import MessageIcon from "@/app/assets/icons/message.svg";
import Image from "next/image";
import { BusinessIcon, UserIcon } from "../../ui/icons";
import { isBrowser } from "@/app/utils/isBrowser";

export default function ProfileCard({ profile }) {
  return (
    <div className="w-full ">
      <div className="h-screen lg:h-[calc(100vh-250px)] bg-black/30 relative">
        <Image
          src="/coordinators/coordinators-header.jpeg"
          alt="Profile banner"
          fill
          className="object-cover opacity-40 "
          priority
        />

        <Content profile={profile} />
      </div>
    </div>
  );
}

function Content({ profile }) {

  console.log("profile",profile)
  const handlePhoneClick = () => {
    isBrowser?
    window.location.href = `tel:${profile.phone}`: null
  };

  const handleEmailClick = () => {
    isBrowser() ? 
    window.location.href = `mailto:${profile.email}`: null
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

  const ProfileType = (type) => {};
  return (
    <>
      <div className="px-section absolute w-full  h-full flex flex-col justify-center">
        <div className="py-6 text-slate-200">
          Preffered Partners /{" "}
          <span className="text-fontColor-sub-heading">{profile.name}</span>
        </div>
        <div className="flex flex-col sm:flex-row  gap-6 p-6 bg-white">
          <div>
            <div className="relative w-40 h-40 lg:h-64 lg:w-64 mx-auto  rounded-full overflow-hidden border-2 border-[#1F1F1F1A]">
              <Image
                src={profile.avatar}
                alt={`${profile.name}'s profile picture`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-wrap  w-full">
            <div className="flex flex-col gap-2 lg:w-3/5 pb-5 ">
              <h1 className="custom-h1 text-fontColor-secondary font-semibold pt-5 md:pt-5 text-nowrap">
                {profile.name}
              </h1>
              <h4 className="custom-h4 font-medium text-fontColor-muted">
                {profile.role}
              </h4>
              <p className="font-normal custom-base text-fontColor-muted ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                alias eum ullam.
              </p>
              <div className="flex  mt-auto flex-wrap w-2/3 gap-3 justify-between ">
                <div className="flex gap-1 text-brand items-center">
                  {profile.userType === "freelancer" ? (
                    <UserIcon className="size-6" />
                  ) : (
                    <BusinessIcon className="size-6" />
                  )}
                  <span className="custom-base font-normal text-fontColor-primary">
                    {profile.userType === "freelancer"
                      ? "Freelancer"
                      : "Business"}
                  </span>
                </div>

                <div className="flex items-center">
                  <LocationIcon className="mr-1 text-brand size-6 " />
                  <span className="custom-base font-normal text-fontColor-primary">
                    {profile.address.city}, {profile.address.state}
                  </span>
                </div>
              </div>
            </div>

            <div className=" my-auto mx-auto md:ms-auto">
              <div className="flex items-center justify-center h-14">
                <Button
                  onClick={handleEmailClick}
                  variant="secondary"
                  className="h-full"
                  size="lg"
                >
                  <MessageIcon className="size-9" />
                </Button>
                <div className="hidden lg:block h-full bg-fontColor-secondary/20 w-[1px]" />
                <Button
                  onClick={handlePhoneClick}
                  className="hover:bg-opacity-85 ms-6 h-3/4 md:h-full  md:px-16"
                  size="lg"
                >
                  <PhoneIcon className="mr-2" /> Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
