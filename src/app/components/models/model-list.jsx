import { ArrowRight, ChevronRight, ListFilter } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import Pagination from "../pagination";
import { LocationBgIcon } from "../ui/icons";

export function ModelList({
  models,
  children,
  listClassName = "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 ",
}) {
  return (
    <div className="mt-10 md:mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="custom-h2 text-fontColor-secondary !mb-0">
            Model Bank
          </h2>
          <p className="text-fontColor-sub-heading mt-1">
            Showing 48 results out of 129,627 based to the filter criteria.
          </p>
        </div>
        <div className="custom-h3 font-medium text-gray-500">
          <ListFilter />
        </div>
      </div>

      <ul className={listClassName}>
        {models.map((model, i) => (
          <li key={i}>
            <ModelCard key={model.id} model={model} />
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
}

export function ModelCard({ model }) {
  return (
    <Link href={`/models/${model.id}`}>
      <div className="p-2 border  rounded-md shadow hover:shadow-md transition-shadow duration-300">
        <div className="relative  w-full aspect-[5/5]  rounded-md overflow-hidden">
          <Image
            src={model.avatar}
            alt={model.name || "model"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex justify-between  px-4 pt-2">
          <div className=" ">
            <h4 className="custom-h3 font-semibold text-fontColor-secondary">
              {model.name}
            </h4>
            <h3 className="custom-base font-normal text-fontColor-subtle">
              {model.gender}
            </h3>
            {model.address && (
              <div className="flex gap-1 items-center">
                <LocationBgIcon />
                <p className="text-gray-600">{model.address.city},</p>
                <p className="text-gray-600"> {model.address.state}</p>
              </div>
            )}
          </div>
          <div className="relative flex items-center justify-center h-7 w-7 lg:h-11 lg:w-11 my-auto">
            <div className="absolute inset-0 bg-black rounded-full z-9"></div>
            <ChevronRight
              className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              size={25}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
