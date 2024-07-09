import React from 'react';

const Slide2 = () => {
  return (
    <div className="slide w-full h-screen flex-shrink-0 relative">

      <div className='slide2_elem1 flex absolute top-[4rem] left-1/4'>
        <p className='w-[29%]'>
          We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.
        </p>
        <div className="w-56 h-56 overflow-hidden rounded-full absolute -top-32 left-[40%]">
          <img className='w-full h-full object-cover object-center rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edd08cc0ac13ed6995bd_4.webp" alt="" />
        </div>
      </div>

      <div className="slide2_elem2 absolute top-1/2 -translate-y-1/2 left-1/4">
        <h1 className='font_neuemachina font-semibold text-9xl text-center text-white pb-4 -translate-x-[10%] pt-2'>20.4M</h1>
        <p className='font_neuemachina text-5xl text-center w-[90%] font-medium'>Real people — real lives — we have built products and solutions for.</p>
        <div className="w-40 h-40 overflow-hidden rounded-full absolute -bottom-[25%] left-[10%]">
          <img className='w-full h-full object-cover scale-[1.16] object-right rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edafe67e88c12db2d78b_2.webp" alt="" />
        </div>
      </div>

      <div className='slide2_elem3 absolute bottom-0 left-[60%]'>
        <div className="w-[20rem] h-[20rem] overflow-hidden rounded-full relative -bottom-36">
          <img className='w-full h-full object-cover scale-[1.2] object-right rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee19cb5203ee12c21ba3_3.webp" alt="" />
        </div>
      </div>

      <div className='slide2_elem4 absolute top-1/2 -translate-y-1/2 -right-[17%]'>
        <div className="w-[17rem] h-[17rem] overflow-hidden rounded-full">
          <img className='w-full h-full object-cover scale-[1.2] object-right rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee2e5e80fe8ace7a1ff3_5.webp" alt="" />
        </div>
      </div>

    </div>

  );
};

export default Slide2;
