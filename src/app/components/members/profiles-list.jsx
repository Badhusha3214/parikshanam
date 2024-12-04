import Link from "next/link";
import Image from "next/image";
import { LocationIcon } from "../ui/icons";
import Pagination from "../pagination";

export function ProfileList({ 
  pagination,
  onPageChange,
  profiles, 
  cardClassName = "", 
  listClassName = "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 " 
}) {
  return (
    <div className="px-section py-section">
      <ul className={listClassName}>
        {profiles.map((profile) => (
          <ProfileCard 
            key={profile.id} 
            profile={profile} 
            className={cardClassName}
          />
        ))}
      </ul>
      <Pagination 
        pagination = {pagination}
        onPageChange = {onPageChange} />
    </div>
  );
}

export function ProfileCard({ 
  profile, 
  children 
}) {
  return (
    <li className="p-4 border  rounded-lg shadow hover:shadow-md transition-shadow duration-300">
     
      <div className="relative  w-full aspect-[5/5] mb-4">
        <Image
         src={profile.image || "https://s3-alpha-sig.figma.com/img/1549/9ee5/a5a138a8fcb0c2e2714ed8582b4f936c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQR70eQOg89PVt6qjN-R6dFPvPhOnEOqeKuKfghp9-hs9Ru2VJkuc68ibMhNDoiv4Ci1hbIa~aQ~qCfIG0OMzv419DbVUJF-N4YbJJt0HsMwMK8c3SLLsqr~ocWtmTiv-oLQRun7d7hFTp-P1ZIALlQiF0uvQT0DiYC~qBTCZxvjo5YhrWzV2sVoapxi9VgRb7JIqfgV7pLUA3gzYZBN8NMLswiw0xGy6G8jbYM696C3j5bXAqUQ56-8eqoqFFjU9sKB9eaRgzQnYROrtiECoPDJqNUIDG4DMgYrCierlqbv3yj81a0oXx-5NBuNbTSfnCibNYnRShioqrkO-R1pfg__"}
          alt={profile.name || "Profile"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="space-y-2  ">
        <h3 className="custom-h4 font-semibold text-fontColor-secondary">
          {profile.name}
        </h3>
        {profile.address && (
          <div className="flex gap-2">
              <LocationIcon className="text-fontColor-secondary"/>
              <p className="text-gray-600">{profile.address.city}</p>
          </div>
        )}
        
      </div>
    </li>
  );
}

