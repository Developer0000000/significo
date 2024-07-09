import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/global/Button'

const Build = () => {

    const titleRef = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {


            gsap.from(titleRef.current, {
                opacity: 0,
                y: -200,
                duration: 1,
                ease: 'elastic.inOut',
                scrollTrigger: {
                    trigger: '.build',
                    start: 'top 40%',
                    end: 'center 60%',
                    scrub: 1,
                    // markers: true,
                    onEnter: () => {
                        document.body.setAttribute('theme', 'white');
                    },
                    onEnterBack: () => {
                        document.body.setAttribute('theme', 'white');
                    },
                }
            });

        });

        ScrollTrigger.refresh();

        return () => ctx.revert();


    }, []);

    return (
        <>
            <section className="build w-full relative flex flex-col sm:flex-row justify-between items-center bg-[#F5F19C] sm:px-14 py-20 mt-24">

                <div>
                    <h2 ref={titleRef} className='text-5xl font_neuemachina'>
                        Let's build a <br />
                        better future. <br />
                    </h2>
                    <div className="mt-10">
                        <Button btnLayout={{ background: '#000', color: '#F5F19C' }} title="let's go" borderColor='border-black' />
                    </div>
                </div>

                <div className='flex items-center gap-10 flex-col sm:flex-row'>
                    <p className='text-lg mt-10 sm:mt-0'>
                        Find out how Significo’s healthcare <br />
                        technology expertise can take your digital <br />
                        experience to the next level. <br />
                    </p>
                    <div className='relative'>
                        <div className="img_rotate">
                            <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317c_ScrollUp.svg" alt="" />
                        </div>
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border border-black rounded-full p-7'>
                            <svg width="40" height="40" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" stroke-width="2"></path>
                                <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" stroke-width="2"></path>
                                <path d="M16 0.703125L16 37.2746" stroke="black" stroke-width="2"></path>
                            </svg>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Build