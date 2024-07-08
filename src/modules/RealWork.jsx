import React, { useEffect, useRef, useState } from 'react';
import Slide1 from '../components/RealWork/Slide1';
import Slide2 from '../components/RealWork/Slide2';
import Slide3 from '../components/RealWork/Slide3';
import Slide4 from '../components/RealWork/Slide4';
import Button from '../components/global/Button';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faviconSalmon, faviconSky } from '../config/favicon';

gsap.registerPlugin(ScrollTrigger);

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
                    start: 'top 15%',
                    end: '+=3500',
                    scrub: 3,
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
                x: -100,
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
                x: -100,
                scrollTrigger: {
                    trigger: '.slide4_elem2',
                    containerAnimation: scrollTween,
                    start: "left 80%",
                    end: "left 20%",
                    // markers: true,
                    scrub: 5,
                },
            });

            ScrollTrigger.refresh();

        }, workRef);

        return () => ctx.revert();

    }, []);

    return (
        <section id='real__work__section' ref={workRef} className="real_work w-full relative scrollbar_none">
            <div className="cont h-screen relative">
                <div className="slides sticky top-0 left-0 flex w-full h-screen scrollbar_none overflow-hidden">

                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                    <Slide4 />

                    <div className="absolute bottom-14 left-14">
                        <Button btnLayout={{ background: '#F5F19C', color: 'black' }} title='partner with us' borderColor='border_dark_salmon' />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default RealWork;
