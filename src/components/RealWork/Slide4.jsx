import React from 'react'

const Slide4 = () => {
  return (
    <>
      <div className="slide w-full h-screen flex-shrink-0 relative">

        <div className="slide4_elem1 absolute top-1/2 -left-48">
          <img className='w-72 h-72 object-cover object-center scale-[1.1] rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.webp" alt="" />
        </div>

        <div className='slide4_elem2 flex absolute top-0 left-[5%]'>
          <p className='w-[28%] opacity-0'>
            We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.
          </p>
          <div className="w-5h-52 h-52 overflow-hidden rounded-full absolute -top-14 left-0">
            <img className='w-full h-full object-cover object-center rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef82bb0daca6843ce305_7.webp" alt="" />
          </div>
        </div>

        <div className="slide4_elem2 absolute top-1/2 -translate-y-1/2">
          <h1 className='font_neuemachina font-semibold text-9xl text-center text-white pb-4 -translate-x-[10%] pt-2'>13</h1>
          <p className='font_neuemachina font-medium text-5xl text-center w-[90%]'>
            Nationalities Represented on Our Team.
          </p>
        </div>

        <div>
          <div className="w-[20rem] h-[20rem]  rounded-full absolute -bottom-48 left-[18%]">
            <img className='w-full h-full object-cover scale-[1.2] object-right rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef723a7cfee7941b52f3_6.webp" alt="" />
          </div>

          <div className="slide4_elem2 w-16 h-16 overflow-hidden rounded-full absolute bottom-1/4 right-20">
            <img className='w-full h-full object-cover scale-[1.17] object-right rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef9463d57ead8406a444_8.webp" alt="" />
          </div>

          <div className="w-[20rem] h-[20rem] overflow-hidden rounded-full absolute top-0 -right-28">
            <img className='w-full h-full object-cover scale-[1.17] object-right rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9efa87b272d53118849fa_9.webp" alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Slide4