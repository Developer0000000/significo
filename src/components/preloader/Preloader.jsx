import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Preloader = () => {

    const loaderRef = useRef(null);

    const dynamic = ['#fff', '#AEDEE0', '#EF9D71', '#E9BBFF', '#F5F19C', '#FF6014'];

    useEffect(() => {

        gsap.to(loaderRef.current, {
            y: '-100%',
            delay: .7,
            // opacity: 0.5,
            zIndex: -1,
            display: 'none',
            duration: 2,
        });

    }, []);

    return (
        <>
            <section style={{ background: dynamic[Math.floor(Math.random() * dynamic.length)] }} ref={loaderRef} className='preloader h-screen w-full fixed top-0 left-0 z-[100]'>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <img className='img_rotate' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317c_ScrollUp.svg" alt="" />
                </div>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border border-black rounded-full p-7'>
                    <svg width="40" height="40" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" stroke-width="2"></path>
                        <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" stroke-width="2"></path>
                        <path d="M16 0.703125L16 37.2746" stroke="black" stroke-width="2"></path>
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Preloader