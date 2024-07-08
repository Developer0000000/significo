import React from 'react'

const Slide1 = () => {
    return (
        <>
            <div className="slide w-full h-screen flex justify-center items-center flex-shrink-0 relative">
                <div>
                    <h1 className='text-8xl slide1_heading relative z-[999999999999]'>
                        <h1 className='font_neuemachina'>Real Talk,</h1>
                        <h1 className='font_neuemachina'>Real Impact</h1>
                    </h1>
                </div>
                <div data-scroll data-scroll-speed="2" className="w-[23%] overflow-hidden rounded-full absolute -right-[12%] top-1/2 -translate-y-1/2">
                    <img className='w-full scale-125 h-full object-cover object-center rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ed8426a9be08870acb09_1.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Slide1