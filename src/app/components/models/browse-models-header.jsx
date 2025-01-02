import Image from "next/image";
import Underline from "@/app/assets/icons/underline.svg";
import { SearchBar } from "../search-name-location";

const Browse_Header = ({ bg, heading }) => {
 

  return (
    <div>
    <div className="relative h-80 lg:h-[500px] bg-black  ">
      <Image
        src={bg}
        alt="Profile banner"
        className="object-cover opacity-20"
        fill
        priority
      />
      <div className=" absolute top-1/2 transform  -translate-y-1/2 space-y-10 left-0 right-0   ">
        <h2 className="custom-h2 text-center text-white">
          {"Find your"}
          <span className="relative">
            {"  " + "Dream Model"}
            <Underline className="absolute left-2 w-full  text-brand h-3" />
          </span>
        </h2>
        <div className="px-section">
            <SearchBar/>
        </div>
      
   
       
      </div>
       
    </div>
    </div>
  );
};

export default Browse_Header;
