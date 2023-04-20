import Image from "next/image";
import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
const montserrat = Montserrat({ subsets: ["latin"] });

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const handleOnChangeDate = (ranges: RangeKeyDict) => {
    if (ranges.selection.startDate && ranges.selection.endDate) {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    }
  };

  return (
    <header className='sticky top-0 z-50 shadow-sm grid grid-cols-2 md:grid-cols-3 p-3 bg-white'>
      {/* left */}
      <div className='relative flex items-center cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          alt='logo'
          width={120}
          height={120}
        ></Image>
      </div>
      {/* center */}
      <div className='hidden md:flex items-center rounded-full p-1 border-2 max-w-sm ml-[50px]'>
        <input
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          type='search'
          name='search'
          id='search'
          placeholder='Start search...'
          className='outline-none flex-grow mx-4 placeholder:text-md placeholder:text'
        />
        <span>
          <i className='bx bx-search-alt bx-sm bx-border rounded-full bg-red-400 hover:bg-red-500 text-white cursor-pointer'></i>
        </span>
      </div>
      {/* right */}
      <div className='flex-end gap-2'>
        <p className={`${montserrat.className} text-sm hidden md:inline`}>
          Become a host
        </p>
        <i className='bx bx-globe bx-sm hover:text-red-400  hidden md:inline'></i>
        <div className='flex items-center justify-center rounded-full border-2 p-1 mx-2 space-x-2'>
          <i className='bx bx-menu bx-sm hover:text-red-400'></i>
          <i className='bx bxs-user-circle bx-sm hover:text-red-400'></i>
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto my-2'>
          <DateRangePicker
            ranges={[selectionRange]}
            rangeColors={["#f87171"]}
            minDate={new Date()}
            onChange={handleOnChangeDate}
          />
          <div className='flex items-center border-b mb-4'>
            <div className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </div>
            <div>
              <i className='bx bxs-user bx-border'></i>
              <input
                type='number'
                min={1}
                className='w-12 pl-2 text-lg outline-none text-red-400'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <button className='bg-red-400 px-3 py-1 rounded-lg text-white hover:bg-red-500 font-semibold'>
              Cancel
            </button>
            <button className='bg-green-400 px-3 py-1 rounded-lg text-white hover:bg-green-500 font-semibold'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
