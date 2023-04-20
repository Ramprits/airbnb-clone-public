import { INearBy } from "@/interface/INearBy";
import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

type SmallCardProps = {
  nearBy: INearBy;
};

const SmallCard = (props: SmallCardProps) => {
  return (
    <div className='flex items-center m-2 space-x-4 p-2 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out rounded-xl'>
      {/* left */}
      <div className='relative h-16 w-16'>
        <Image
          className='rounded-full'
          src={props.nearBy.img}
          alt={props.nearBy.location}
          fill
        />
      </div>
      {/* right */}
      <div className='flex flex-col'>
        <strong className={`${montserrat.className} text-base font-semibold`}>
          {props.nearBy.location}
        </strong>
        <p className={`${montserrat.className} text-xs font-light`}>
          {props.nearBy.distance}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
