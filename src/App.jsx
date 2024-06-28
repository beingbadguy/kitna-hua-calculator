import React, { useState } from 'react';
import Function from './components/Function';
const App = () => {
  return (
    <div className='bg-[#ffdf00] min-h-[95vh] flex justify-center flex-col select-none overflow-x-hidden '>
      <div className='flex mx-10'>
        <p className='text-black'> Agar 1kg 150₹ ka hua to 15₹ ka kitna hoga?</p>
        <img src='./puzzled.png' alt='' className='h-[100px] w-[100px]' />
      </div>

      <div className='mt-10'>
        <Function />
      </div>
      <p className='text-black absolute bottom-0 p-5 left-[15%]'>Created with ♡ by Aman Kumar </p>
    </div>
  );
};
export default App;
