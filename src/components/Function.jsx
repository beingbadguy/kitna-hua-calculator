import React, { useState } from 'react';

const Function = () => {
  const [moneyCal, setMoneyCal] = useState({
    moneyKg: '',
    money: '',
  });
  const [val, setVal] = useState();
  const handle = (e) => {
    const { name, value } = e.target;
    setMoneyCal({ ...moneyCal, [name]: value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (moneyCal.moneyKg == '' || moneyCal.money == '') {
      setVal('ache se btaiye!!');
      return;
    }
    const weight = moneyCal.moneyKg / moneyCal.money;
    const cost = (1000 / weight).toFixed(2) + ' gm';
    setVal(cost);
  };

  return (
    <div>
      <form
        onSubmit={handleForm}
        className='flex flex-col  rounded items-center justify-center border  mx-10  gap-5 p-10 bg-[#FCFFC1] '
      >
        <h1 className='font-bold'>
          <span className='bg-green-200 italic'>Kitna hua?</span> Calculator
        </h1>
        <div className='text-left flex flex-col gap-5'>
          <div>
            <p className='text-sm'>Ek kilo kitne ka hua?</p>
            <input
              type='number'
              name='moneyKg'
              id=''
              value={moneyCal.moneyKg}
              className='border-2 border-black p-2 w-full text-[14px] '
              placeholder='₹'
              onChange={handle}
            />
          </div>
          <div>
            <p className='text-sm'>Dukaandaar ko kitne rupaye diye?</p>
            <input
              type='number'
              name='money'
              id=''
              value={moneyCal.money}
              placeholder='₹'
              className=' border-2 border-black  text-[14px] p-2 w-full'
              onChange={handle}
            />
          </div>
        </div>

        <button className='w-[100px] bg-green-200 font-bold text-black p-2'>btaiye</button>
      </form>
      <div
        className='flex items-center
      justify-center'
      >
        <img
          src='./dab.png'
          alt=''
          className={`h-[200px] w-[200px] ${val && val != 'ache se btaiye!!' ? 'block' : 'hidden'}`}
        />
        <p className='text-black  text-center mt-10 ml-[-50px] text-3xl'> {val}</p>
      </div>
    </div>
  );
};
export default Function;
