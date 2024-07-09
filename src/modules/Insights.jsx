import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/global/Button'
import { splitText } from '../utils/splitText';

const Insights = () => {

    const titleRef = useRef(null);

    useEffect(() => {

        titleRef.current.innerHTML = splitText('Stay up-to-date on the latest healthcare innovations and thought leadership.');


        let ctx = gsap.context(() => {

            let spans = gsap.utils.toArray('span', titleRef.current);

            gsap.from(spans, {
                opacity: 0,
                x: -10,
                stagger: 0.1,
                duration: 1,
                ease: 'power2',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 70%',
                    end: 'bottom 70%',
                    scrub: 1,
                    // markers: true,
                }
            });

        });

        ScrollTrigger.refresh();

        return () => ctx.revert();


    }, []);

    return (
        <>

            <section className="insights w-[90%] mx-auto h-full sm:h-screen relative mt-48 flex flex-col sm:flex-row items-center">

                <div className='ins_left sm:w-[30%] sm:h-screen order-last sm:order-1'>
                    <div className='sm:w-48'>
                        <p ref={titleRef} className=''></p>
                    </div>

                    <div className="sm:absolute bottom-0 left-0 mt-10 sm:mt-0">
                        <h1 className='text-5xl font_neuemachina'>Explore <br /> Our Insights</h1>
                        <div className="mt-5">
                            <Button btnLayout={{ background: '#F5F19C' }} title='view all articles' borderColor='border-black' />
                        </div>
                    </div>
                </div>

                <div className='ins_right order-first sm:order-2'>

                    <div className='flex flex-col sm:flex-row items-center sm:justify-end gap-10 sm:-translate-y-10 sm:-rotate-[20deg] my-[20%]'>

                        <article data-scroll data-scroll-speed="1.7" className='border border-black p-6 -translate-y-10 rounded-full flex flex-col items-center justify-center space-y-14'>

                            <div className='w-72 h-72 overflow-hidden rounded-full'>
                                <img className='w-full h-full object-cover object-center rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp" alt="" />
                            </div>

                            <div className=''>
                                <h1 className='text-xl text-center'>Digital Therapeutics</h1>
                                <h1 className='text-xl text-center'>Decoded: A Guide to</h1>
                                <h1 className='text-xl text-center'>Understanding DTx and</h1>
                                <h1 className='text-xl text-center'>Why They're Worth Your</h1>
                                <h1 className='text-xl text-center'>Attention</h1>
                            </div>

                            <button className='btn bg-[#E9BBFF] rounded-full px-2 py-1 text-lg font_neuemachina font-semibold'>
                                Thought Leadership
                            </button>
                            <br />
                        </article>

                        <article data-scroll data-scroll-speed="1.3" className='border border-black p-6 rounded-full flex flex-col items-center justify-center space-y-14'>

                            <div className="mt-6">
                                <button className='btn bg-[#E9BBFF] rounded-full px-2 py-1 text-lg font_neuemachina font-semibold'>
                                    Thought Leadership
                                </button>
                            </div>

                            <div className=''>
                                <h1 className='text-xl text-center'>Digital Therapeutics</h1>
                                <h1 className='text-xl text-center'>Decoded: A Guide to</h1>
                                <h1 className='text-xl text-center'>Understanding DTx and</h1>
                                <h1 className='text-xl text-center'>Why They're Worth Your</h1>
                                <h1 className='text-xl text-center'>Attention</h1>
                            </div>

                            <div className='w-72 h-72 overflow-hidden rounded-full'>
                                <img className='w-full h-full object-cover object-center rounded-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/664e2389903487ba78a7ec53_Untitled%20design-13.webp" alt="" />
                            </div>

                        </article>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Insights