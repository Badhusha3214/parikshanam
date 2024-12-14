import React from "react";
import InstaIcon from "@/app/assets/icons/instagram.svg";
import LinkIcon from "@/app/assets/icons/linkedin.svg";
import XIcon from "@/app/assets/icons/x.svg";
// import DribbleIcon from '@/app/assets/icons/dribble.svg'
import FbIcon from "@/app/assets/icons/facebook.svg";
import Link from "next/link";

const Characteristics = ({ data,hideHeader }) => {
  
 

  return (
    <div className="">
      { !hideHeader? <h2 className="custom-h2 text-fontColor-sub-heading">Characteristics</h2> : null}
     <div className="space-y-4 w-full">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between border-b-[1px] pb-3">
            <span className="custom-base text-fontColor-primary">{key}</span>
            <span className="custom-base text-fontColor-secondary font-semibold">{value}</span>
          </div>
        ))}
   </div> 
    </div>
  );
};

export default Characteristics;
