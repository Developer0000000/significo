import React from 'react'

const Slide3 = () => {
  return (
    <>
      <div className="slide w-full h-screen flex-shrink-0 relative">

        <div className="absolute top-0 left-[20%]">

          <div className='flex slide3_elem1'>
            <p className='text-lg w-[40%] relative top-16'>Our team is global and diverse, because our individual experiences make us stronger.</p>
            <img className='w-72 h-72 absolute -top-14 left-72 object-cover object-center rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.webp" alt="" />
          </div>

          <div className="slide3_elem2 relative text-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className='font_neuemachina font-semibold text-9xl text-center text-white pb-4 pt-24'>49%</h1>
              <p className='font_neuemachina font-medium text-[40px] text-center w-[85%]'>
                Expert Women in Tech.
              </p>
            </div>
            <div className='translate-x-40'>
              <img className='w-48 h-48 object-cover scale-[1.9] object-right rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.webp" alt="" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Slide3