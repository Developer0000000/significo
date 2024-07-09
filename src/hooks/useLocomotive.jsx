import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { faviconBlack, faviconSalmon, faviconSky, faviconWhite } from "../config/favicon";
import { useEffect, useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useLocomotive = (start) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    console.log("🚀 ~ useLocomotive ~ currentIndex:", currentIndex);

    const locoScrollRef = useRef(null);

    useGSAP(() => {
        if (!start) return;

        const scrollEl = document.querySelector("main");

        locoScrollRef.current = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            touchMultiplier: 5,
            tablet: { smooth: true },
            smartphone: { smooth: true }
        });

        locoScrollRef.current.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if (locoScrollRef.current) {
                    return arguments.length
                        ? locoScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true })
                        : locoScrollRef.current.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if (locoScrollRef.current) {
                    return arguments.length
                        ? locoScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true })
                        : locoScrollRef.current.scroll.instance.scroll.x;
                }
                return null;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: scrollEl.style.transform ? "transform" : "fixed"
        });

        const lsUpdate = () => {
            if (locoScrollRef.current) {
                locoScrollRef.current.update();
            }
        };

        ScrollTrigger.defaults({ scroller: scrollEl });

        ScrollTrigger.defaults({
            scroller:
                document.documentElement.classList.contains("has-scroll-smooth") &&
                scrollEl
        });

        ScrollTrigger.addEventListener("refresh", lsUpdate);
        ScrollTrigger.refresh();

        const favicon = document.querySelector('.favicon');

        const sections = [
            { id: 'hero__section', favicon: faviconBlack },
            { id: 'craft__sky__section', favicon: faviconSky },
            { id: 'real__work__section', favicon: faviconSalmon },
            { id: 'team__section', favicon: faviconWhite },
        ];

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.17
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = sections.find(sec => sec.id === entry.target.id);
                    if (section) {
                        favicon.href = section.favicon;
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });


        return () => {
            locoScrollRef.current.destroy();
            ScrollTrigger.removeEventListener("refresh", lsUpdate);
            observer.disconnect();
        };

    }, [start]);

    useEffect(() => {

        const pages = ['#hero__section', '#craft__sky__section', '#real__work__section', '#team__section'];

        const handleClick = () => {
            if (!locoScrollRef.current) return;
            // console.log("🚀 ~ handleClick ~ currentIndex:", currentIndex);
            // console.log(pages[currentIndex]);
            locoScrollRef.current.scrollTo(`${pages[currentIndex]}`, { duration: 1, easing: [0.42, 0, 0.58, 1] });
            setCurrentIndex(prevIndex => {
                if (prevIndex < pages.length - 1) {
                    return prevIndex + 1;
                } else {
                    return 0;
                }
            });
        };

        const btnDown = document.querySelector('.btn_down');
        btnDown.addEventListener('click', handleClick);

        return () => {
            btnDown.removeEventListener('click', handleClick);
        };

    }, [currentIndex]);
};

export default useLocomotive;
