import Link from "next/link";
import Image from "next/image";
import { LocationIcon, UserIcon, BusinessIcon } from "../ui/icons";
import Pagination from "../pagination";
import { ChevronRight } from "lucide-react";

export function PartnersList({
  partners,
  listClassName = "grid grid-cols-2  lg:grid-cols-3 gap-8 ",
}) {


  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="px-3 py-3">
          Showing 12 results of {partners.length} profiles
        </h1>
        <ul className={listClassName}>
          {partners.map((partner) => (
            <PartnersCard key={partner.id} partner={partner} />
          ))}
        </ul>
      </div>
      <Pagination />
    </div>
  );
}

export function PartnersCard({ partner }) {
  const ProfileIcon = partner.userType === "freelancer" ? UserIcon : BusinessIcon
  return (
   
      <li className=" border  rounded-lg shadow hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full max-w-sm bg-white p-3 flex flex-col items-center">
          <div className=" absolute right-2 w-full flex justify-end ">
            <ProfileIcon className="w-6 h-6 text-yellow-400" />
          </div>

          <div className="relative mt-4 w-32 h-32 mb-4">
            <Image
              fill
              src={partner.avatar}
              alt={partner.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="flex items-center gap-1 text-gray-600 mb-2">
            <LocationIcon className="text-brand size-6" />
            <p className="text-gray-600">{partner.address.city}</p>
          </div>

          <h3 className="custom-h5 font-semibold text-fontColor-secondary mb-1">{partner.name}</h3>

          <p className="text-gray-500 mb-6">{partner.role}</p>

    

          <Link
           href={`/partners/${partner.id}`}
            className="flex justify-between items-center gap-2 px-3 py-2 border border-black rounded-full text-gray-700 hover:bg-gray-50 transition-colors "
          >
            <span className="">View Profile</span>
            <ChevronRight className="text-white bg-black rounded-full hover:opacity-90 " />
         </Link>
        </div>
      </li>
   
  );
}
