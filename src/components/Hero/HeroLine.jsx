import React from 'react'

const HeroLine = ({ title, src, alt, id, width }) => {

    if (id == 15) {
        // console.log(title, src, width);
    }

    return (
        <>
            <div data-number={id} className="hero_row_elem flex items-center gap-7">
                <h1 className='text-7xl font_neuemachina'>{title}</h1>
                <div className='img_div w-[3.5rem] h-[3.5rem] rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src={src} alt={alt} />
                </div>
            </div>
        </>
    )
}

export default HeroLine