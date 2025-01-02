import Link from "next/link";
import Image from "next/image";
import { LocationIcon, UserIcon, BusinessIcon } from "../ui/icons";
import Pagination from "../pagination";
import { ChevronRight } from "lucide-react";

export function TechnicianList({
  technicians,
  listClassName = "grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 ",
}) {


  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <h2 className="px-3 py-3">
          Showing 12 results of {technicians.length} profiles
        </h2>
        <ul className={listClassName}>
          {technicians.map((technician) => (
            <TechnicianCard key={technician.id} technician={technician} />
          ))}
        </ul>
      </div>
      <Pagination />
    </div>
  );
}

export function TechnicianCard({ technician }) {
  const ProfileIcon = technician.userType === "freelancer" ? UserIcon : BusinessIcon
  return (
   
      <li className=" border rounded-lg shadow hover:shadow-md transition-shadow duration-300">
        <div className="relative mx-auto w-full max-w-sm bg-white p-3 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              fill
              src={technician.avatar}
              alt={technician.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="flex items-center gap-1 text-gray-600 mb-2">
            <LocationIcon className="text-brand size-6" />
            <p className="text-gray-600">{technician.address.city}</p>
          </div>

          <h3 className="custom-h5 font-semibold text-fontColor-secondary mb-1">{technician.name}</h3>

          <p className="text-gray-500 mb-6">{technician.role}</p>

    

          <Link
           href={`/technicians/${technician.id}`}
            className="flex justify-between items-center gap-2 px-3 py-2 border border-black rounded-full text-gray-700 hover:bg-gray-50 transition-colors "
          >
            <span className="">View Profile</span>
            <ChevronRight className="text-white bg-black rounded-full hover:opacity-90 " />
         </Link>
        </div>
      </li>
   
  );
}
