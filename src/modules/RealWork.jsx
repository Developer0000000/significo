import React, { useEffect, useRef, useState } from 'react';
import Slide1 from '../components/RealWork/Slide1';
import Slide2 from '../components/RealWork/Slide2';
import Slide3 from '../components/RealWork/Slide3';
import Slide4 from '../components/RealWork/Slide4';
import Button from '../components/global/Button';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const RealWork = () => {

    const workRef = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {

            let slides = gsap.utils.toArray('.slide');

            let scrollTween = gsap.to(slides, {
                xPercent: -100 * (slides.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: workRef.current,
                    // end: '+=3500',
                    start: window.innerWidth > 640 ? 'top 15%' : 'top top',
                    // end: () => "+=" + window.innerWidth * (slides.length - 1),
                    end: () => "+=" + window.innerWidth * (slides.length - 1),
                    scrub: 1,
                    pin: true,
                    // markers: true,
                    onEnter: () => {
                        document.body.setAttribute('theme', 'salmon');
                    },
                    onEnterBack: () => {
                        document.body.setAttribute('theme', 'salmon');
                    },
                },
            });

            (() => {
                gsap.from('.slide1_heading h1', {
                    y: 50,
                    scale: 1.13,
                    opacity: 0,
                    stagger: 0.01,
                    rotateX: '-90deg',
                    scrollTrigger: {
                        trigger: '.slide1_heading',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                    },
                });

                gsap.to('.slide2_elem2', {
                    x: -70,
                    scrollTrigger: {
                        trigger: '.slide2_elem2',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                        scrub: 5,
                    },
                });

                gsap.from('.slide2_elem3', {
                    x: -70,
                    scrollTrigger: {
                        trigger: '.slide2_elem3',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                        scrub: 5,
                    },
                });

                gsap.to('.slide2_elem4', {
                    x: 70,
                    scrollTrigger: {
                        trigger: '.slide2_elem4',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                        scrub: 5,
                    },
                });

                gsap.to('.slide3_elem1', {
                    x: 150,
                    scrollTrigger: {
                        trigger: '.slide2_elem4',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                        scrub: 5,
                    },
                });

                gsap.to('.slide3_elem2', {
                    x: 195,
                    scrollTrigger: {
                        trigger: '.slide2_elem4',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                        scrub: 5,
                    },
                });

                gsap.to('.slide4_elem1', {
                    x: window.innerWidth > 640 ? -100 : -300,
                    scrollTrigger: {
                        trigger: '.slide4_elem1',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                        scrub: 5,
                    },
                });

                gsap.to('.slide4_elem2', {
                    x: window.innerWidth > 640 ? -50 : -600,
                    scrollTrigger: {
                        trigger: '.slide4_elem2',
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        end: "left 20%",
                        // markers: true,
                        scrub: 5,
                    },
                });
            })()


            ScrollTrigger.refresh();

        }, workRef);

        return () => ctx.revert();

    }, []);

    return (
        <section id='real__work__section' ref={workRef} className="real_work w-full relative h-screen">
            <div className="slides flex overflow-hidden flex-nowrap w-[300%] sm:w-full h-full">
                <Slide1 />
                <Slide2 />
                <Slide3 />
                <Slide4 />
            </div>
            <div className="absolute bottom-14 left-14">
                <Button btnLayout={{ background: '#F5F19C', color: 'black' }} title='partner with us' borderColor='border_dark_salmon' />
            </div>
        </section>
    );
}

export default RealWork;
