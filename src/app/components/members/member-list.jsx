import Link from "next/link";
import Image from "next/image";
import { LocationIcon } from "../ui/icons";
import Pagination from "../pagination";

export function MemberList({ 
  members, 
  children,
  listClassName = "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 " 
}) {
  return (
    <div className="px-section py-section">
      <h1 className="px-2 py-2">Showing 12 results out of {members.length}00 profiles</h1>
      <ul className={listClassName}>
        {members.map((member) => (
          <MemberCard 
            key={member.id} 
            member={member} 
          />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}

export function MemberCard({ 
  member, 
}) {
  return (
    <Link  href={`/members/${member.id}`}>
    <li className="p-2 border  rounded-lg shadow hover:shadow-md transition-shadow duration-300">
     
      <div className="relative  w-full aspect-[5/5] mb-4">
        <Image
         src="/members/member.png"
          alt={member.name || "member"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="space-y-2  ">
        <h3 className="custom-h4 font-semibold text-fontColor-secondary">
          {member.name}
        </h3>
        {member.address && (
          <div className="flex gap-1">
              <LocationIcon className="text-fontColor-secondary size-5  my-auto"  />
              <p className="text-gray-600">{member.address.city}</p>
          </div>
        )}
        
      </div>
    </li>
    </Link>
  );
}

