import React, { useEffect, useRef } from 'react';
import Video from '../components/Hero/Video';
import HeroOverlay from '../components/Hero/HeroOverlay';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitText2 } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const headerRef = useRef(null);
    const heroSubtitleRef = useRef(null);

    useEffect(() => {
        const subtitleElement = heroSubtitleRef.current;
        if (subtitleElement) {
            splitText2('We build big ideas. \n Software. Apps. Tools. \n For real people. Real \n lives.', subtitleElement)
        }
        return () => subtitleElement.innerHTML = '';
    }, [heroSubtitleRef])

    useEffect(() => {

        let ctx = gsap.context(() => {
            gsap.set('.hero_rows', { scale: 20 });

            let spans = gsap.utils.toArray('span', heroSubtitleRef.current);
            gsap.from(spans, {
                opacity: 0,
                x: -10,
                delay: 1,
                stagger: 0.03,
                duration: .1,
                ease: 'power2',
            });

            const tl = gsap.timeline({
                ease: 'power2',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top top',
                    end: '250%',
                    scrub: 1,
                    pin: true,
                    // markers: true,
                    onEnter: () => {
                        document.body.setAttribute('theme', 'black');
                    },
                    // onLeave: () => {
                    //     document.body.removeAttribute('theme');
                    // },
                    onEnterBack: () => {
                        document.body.setAttribute('theme', 'black');
                    },
                    // onLeaveBack: () => {
                    //     document.body.removeAttribute('theme');
                    // }
                }
            });

            (() => {

                tl
                    .to('.vid_cont', {
                        '--clip': '3%',
                    }, 'a')
                    .to('.hero_rows', {
                        scale: 1,
                        translateY: '-33%',
                    }, 'a')
                    .from('.hero_overlay_title h3 span', {
                        opacity: 0,
                        stagger: 0.01,
                        delay: -0.01,
                    }, 'a')
                    .to('.vid_cont', {
                        opacity: 0,
                        display: 'none',
                        delay: -0.6,
                    })
                    .to('.hero_row_lft', {
                        translateX: '20%',
                        duration: 3,
                        ease: 'power4',
                        stagger: 0.08,
                    }, 'b')
                    .to('.hero_row_rgt', {
                        translateX: '-40%',
                        duration: 3,
                        ease: 'power4',
                        stagger: 0.08,
                    }, 'b')
                    .to('.hero_subtitle', {
                        opacity: 0,
                        duration: 1,
                        delay: 2,
                    }, 'b');

            })();

        }, headerRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <header id='hero__section' ref={headerRef} className='w-full h-screen relative'>
            <Video />
            <section>
                <div className='absolute bottom-10 z-20 left-10'>
                    <p ref={heroSubtitleRef} className='hero_subtitle opacity-1'></p>
                </div>
            </section>
            <HeroOverlay />
        </header>
    );
}

export default Hero;
