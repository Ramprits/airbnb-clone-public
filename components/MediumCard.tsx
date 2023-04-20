import { ICard } from "@/interface/INearBy";
import Image from "next/image";
import React from "react";

type Props = {
  card: ICard;
};

function MediumCard(props: Props) {
  return (
    <div className='cursor-pointer hover:scale-105 p-1 transition duration-150 ease-out'>
      <div className='relative h-80 w-80'>
        <Image
          src={props.card.img}
          alt={props.card.title}
          fill
          className='rounded-sm'
        />
      </div>
      <p className='text-sm font-normal py-2'>{props.card.title}</p>
    </div>
  );
}

export default MediumCard;
