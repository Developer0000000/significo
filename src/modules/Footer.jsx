import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../components/Nav/Logo'
import Button from '../components/global/Button'

const Footer = () => {

    const logoRef = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.timeline({
                scrollTrigger: {
                    trigger: 'footer',
                    start: 'top top',
                    end: 'center 40%',
                    scrub: 2,
                    // markers: true,
                }
            })
                .to(logoRef.current, {
                    delay: -1,
                    rotate: 0,
                    bottom: '-2rem',
                    duration: 1,
                    ease: 'sine.inOut',
                })
                .from('.copyright_text', {
                    delay: -1,
                    opacity: 0,
                    bottom: '-5rem',
                    duration: 1,
                    ease: 'elastic.inOut',
                })

        });

        ScrollTrigger.refresh();

        return () => ctx.revert();


    }, []);

    return (
        <>
            <footer className="footer w-full h-[105vh] relative px-14 pt-10 bg-black overflow-hidden">

                <div className="flex items-start justify-between w-full capitalize pt-10">
                    <ul className='space-y-3'>
                        {
                            ['home', 'about', 'solutions', 'team'].map((item, index) => (
                                <li key={index} className="text-xl text-white cursor-pointer hover:text-[#F5F19C]">{item}</li>
                            ))
                        }
                    </ul>

                    <div className=''>
                        <p className='text-2xl pb-8 text-white font_neuemachina'>Join our mailing list for <br />
                            the latest updates.</p>
                        <div className='flex items-center gap-6'>
                            <input className='py-4 px-4 text-black placeholder:text-black w-64 outline-none' type="text" placeholder='Enter your email address...' />
                            <Button btnLayout={{ background: '#F5F19C' }} title='subscribe' borderColor='border-black' />
                        </div>
                    </div>

                    <ul className='space-y-3'>
                        {
                            ['Insights', 'Newsroom', 'Resources', 'Contact', 'Careers'].map((item, index) => (
                                <li key={index} className="text-xl text-white cursor-pointer hover:text-[#F5F19C]">{item}</li>
                            ))
                        }
                    </ul>

                </div>

                <div ref={logoRef} className='absolute -bottom-full rotate-45 w-full left-0 px-14'>
                    <Logo width='100%' height='100%' />
                </div>

                <div className='absolute left-0 bottom-0 w-full px-14 bg-black'>
                    <div className='flex justify-between items-center border-t-2 py-10'>
                        <ul className='flex items-center gap-5 capitalize'>
                            {
                                ['privacy policy', 'terms of use', 'trust'].map((item, index) => (
                                    <li key={index} className='text-sm text-white hover:text-[#F5F19C] underline underline-offset-4 hover:no-underline'>
                                        <span className='link link--metis'>{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="copyright_text text-white text-sm cursor-pointer hover:text-[#F5F19C]">© {new Date().getFullYear()} Significo. All rights reserved.</p>
                        <ul className='flex items-center gap-5'>
                            <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]"><i class="text-xl ri-facebook-circle-fill"></i></li>
                            <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]"><i class="text-xl ri-instagram-line"></i></li>
                            <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]"><i class="text-xl ri-twitter-x-line"></i></li>
                            <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]"><i class="text-xl ri-github-fill"></i></li>
                            <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]"><i class="text-xl ri-linkedin-box-fill"></i></li>
                            <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]"><i class="text-xl ri-youtube-fill"></i></li>
                        </ul>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer