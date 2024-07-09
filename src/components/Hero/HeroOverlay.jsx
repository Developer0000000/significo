import React, { useEffect, useRef } from 'react'
import { LinesData1, LinesData2, LinesData3, LinesData4 } from '../../config/LinesData'
import HeroLine from './HeroLine'
import { splitText2 } from '../../utils/splitText';

const HeroOverlay = () => {

    let titleRef = useRef(null);

    useEffect(() => {
        let titleElement = titleRef.current;
        if (titleElement) {
            splitText2('We craft healthcare technology \n that is more human:', titleElement);
        }
        return () => titleElement.innerHTML = '';
    }, [])

    return (
        <>
            <section className="hero_overlay h-screen w-full relative overflow-hidden z-[-1]">

                <div className='text-white hero_overlay_title absolute top-[16%] text-2xl text-center left-1/2 -translate-x-1/2 w-full'>
                    <h3 ref={titleRef}></h3>
                </div>

                <div className='hero_rows absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[77%] w-[90%] '>

                    <div className="hero_row hero_row_lft -translate-x-1/2 w-full flex items-center gap-7 whitespace-nowrap">
                        {
                            LinesData1.map((line) => {
                                return (
                                    <HeroLine key={line.id} {...line} />
                                )
                            })
                        }
                    </div>
                    <div className="hero_row hero_row_rgt -translate-x-[23%] w-full flex items-center gap-7 whitespace-nowrap">
                        {
                            LinesData2.map((line) => {
                                return (
                                    <HeroLine key={line.id} {...line} />
                                )
                            })
                        }
                    </div>
                    <div className="hero_row hero_row_lft -translate-x-1/2 w-full flex items-center gap-7 whitespace-nowrap">
                        {
                            LinesData3.map((line) => {
                                return (
                                    <HeroLine key={line.id} {...line} />
                                )
                            })
                        }
                    </div>
                    <div className="hero_row hero_row_rgt -translate-x-[23%] w-full flex items-center gap-7 whitespace-nowrap">
                        {
                            LinesData4.map((line) => {
                                return (
                                    <HeroLine key={line.id} {...line} />
                                )
                            })
                        }
                    </div>


                </div>

            </section>
        </>
    )
}

export default HeroOverlay