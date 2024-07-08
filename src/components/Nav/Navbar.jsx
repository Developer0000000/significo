import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './Logo'


const Navbar = () => {

    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.from("nav ul li", {
                delay: 2.3,
                duration: 1,
                opacity: 0,
                stagger: 0.3,
                x: -100,
            })

            gsap.from('nav .logo', {
                delay: 2,
                opacity: 0,
                y: -200,
                duration: 2.4,
                ease: 'elastic.inOut',
            });

        });

        ScrollTrigger.refresh();

        return () => ctx.revert();


    }, []);

    return (
        <>
            <nav className='navbar w-full fixed z-50 top-0 left-0 px-14 py-3'>
                <div className="flex items-center justify-between">
                    <div className='logo'>
                        <Logo width='40%' height='40%' />
                    </div>
                    <ul className='flex items-center gap-6'>
                        {
                            ['solutions', 'about', 'insights', 'team', 'careers'].map((item, index) => {
                                return <li className='capitalize' key={index}>{item}</li>
                            })
                        }
                        <button className='btn_org bg_org px-2 py-1.5 rounded'>
                            <span>Contact Us</span>
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar