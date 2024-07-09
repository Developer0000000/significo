import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './Logo';

const Navbar = () => {

    const menuRef = useRef(null);
    let flag = true;

    const handleMenuToggle = () => {

        if (flag) {
            menuRef.current.classList.add('menu_active');
            gsap.to('.nav_line', {
                width: '100%',
                duration: 0.5,
                ease: 'power3.inOut',
                opacity: 1,
                delay: 0.35,
            });
            gsap.to('.mobile .logo svg path', {
                fill: 'white',
            });
            gsap.to('.mobile i', {
                color: 'white',
            });
            flag = false;
        } else {
            menuRef.current.classList.remove('menu_active');
            gsap.to('.nav_line', {
                width: 0,
                duration: 0.5,
                ease: 'power3.inOut',
                opacity: 1,
            });
            if (document.body.getAttribute('theme') != 'black') {
                gsap.to('.mobile .logo svg path', {
                    fill: 'black',
                });
                gsap.to('.mobile i', {
                    color: 'black',
                });
            }
            flag = true;
        }

    };

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     let ctx = gsap.context(() => {
    //         gsap.from("nav ul li", {
    //             delay: 2.3,
    //             duration: 1,
    //             opacity: 0,
    //             stagger: 0.3,
    //             x: -100,
    //         });

    //         gsap.from('nav .logo', {
    //             delay: 2,
    //             opacity: 0,
    //             y: -200,
    //             duration: 2.4,
    //             ease: 'elastic.inOut',
    //         });
    //     });

    //     ScrollTrigger.refresh();

    //     return () => ctx.revert();
    // }, []);

    return (
        <>
            <nav className='navbar w-full fixed z-50 top-0 left-0 px-8 sm:px-14 py-6 sm:py-3'>

                <div className="sm:flex items-center justify-between hidden">
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

                <div className="mobile sm:hidden flex items-center justify-between relative">
                    <div className='logo relative z-[70]'>
                        <Logo width='50%' height='50%' />
                    </div>
                    <button onClick={handleMenuToggle} type='button' className='text-4xl transition_all relative z-[70]'>
                        <i className='ri-menu-line'></i>
                    </button>
                    <div className='nav_line z-[70] fixed top-20 opacity-0 left-0 w-0 h-[1.25px] bg-white' />
                </div>

                <div ref={menuRef} className='fixed mobile_menu transition_all h-screen w-full top-[-150%] left-0 bg-black z-40 flex flex-col items-center justify-center'>
                    <ul className='flex flex-col items-center gap-6'>
                        {
                            ['solutions', 'about', 'insights', 'team', 'careers'].map((item, index) => {
                                return <li className='capitalize text-white' key={index}>{item}</li>
                            })
                        }
                        <button className='btn_org bg_org px-2 py-1.5 rounded'>
                            <span>Contact Us</span>
                        </button>
                    </ul>
                </div>

            </nav>
        </>
    );
};

export default Navbar;
