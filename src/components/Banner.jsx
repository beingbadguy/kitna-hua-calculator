import React, { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';

const Banner = ({ q, a }) => {
  const [collapse, setCollapse] = useState(true);
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div>
      <div
        className={`bg-green-200   text-black font-bold container my-5 overflow-hidden   text-2xl transition-all  duration-1000  border cursor-pointer ${
          collapse ? 'h-16' : 'h-[120px]'
        } `}
      >
        <div onClick={handleClick} className='flex items-center justify-between'>
          <h1 className='py-4'>{q}</h1>
          <div
            className={` transition-all duration-1000 text-black  ${
              collapse ? 'rotate-90 transition-all duration-1000' : ''
            }`}
          >
            <IoIosArrowDropdown />
          </div>
        </div>
        <p className={`text-md italic text-black`}>{a}</p>
      </div>
    </div>
  );
};
export default Banner;
