import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {

    const aboutRef = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {

            let clutter = '';
            aboutRef.current.textContent.split('').forEach((char) => {
                clutter += `<span>${char}</span>`
            })
            aboutRef.current.innerHTML = clutter;

            let spans = gsap.utils.toArray('span', aboutRef.current);

            gsap.to(spans, {
                color: 'black',
                stagger: 0.5,
                duration: 1,
                ease: 'power2',
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 50%',
                    end: 'bottom 70%',
                    scrub: 1,
                    // markers: true,
                }
            });

        }, aboutRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className="about w-full h-full relative">
                <div className="w-[95%] sm:w-[90%] mx-auto my-10">
                    <h2 className='mb-10 text-5xl font_neuemachina text-center'>About Us</h2>
                    <p ref={aboutRef} className='about_text text-black/10 text-[2rem] sm:text-[2.6rem] leading-[1.5] pb-10 sm:text-left text-center'>Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism.</p>
                </div>
            </section>
        </>
    )
}

export default About