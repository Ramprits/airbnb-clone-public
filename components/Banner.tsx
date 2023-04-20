import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] z-0'>
      <Image
        priority
        src='https://links.papareact.com/0fm'
        alt='banner image'
        fill
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p
          className={`${montserrat.className} text-sm sm:text-lg font-semibold`}
        >
          Not sure where to go? Perfect?
        </p>
        <button className='btn-primary mt-2 hover:bg-red-500 shadow-sm transition duration-150'>
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
