import { ArrowRight, ChevronRight, ListFilter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LocationBgIcon } from "../../ui/icons";
import Pagination from "../../pagination";

export function ModelList({
  models,
  children,
  listClassName = "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 ",
}) {
  return (
    <div className="mt-10 md:mt-20">
      <div className="flex justify-between">
        <h2 className="custom-h2 text-fontColor-secondary">
          Models Managed(105)
        </h2>
        <div className="flex gap-3 custom-h3 font-medium text-gray-500">
          Filter <ListFilter />
        </div>
      </div>
      <h2 className="py-3 px-3 mt-4 mb-8 bg-brand-subtle text-fontColor-tertiary text-sm flex items-center gap-2">
        {" "}
        <span className="">
          <ArrowRight size={20} strokeWidth={1} />
        </span>
        Showing 12 results out of {models.length}00 profiles
      </h2>
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
            src={
              model.avatar
            }
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
          <div className="my-auto">
            <ChevronRight
              className="text-white bg-black rounded-full hover:opacity-90 
               w-8 h-8 sm:w-11 sm:h-11 "
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
