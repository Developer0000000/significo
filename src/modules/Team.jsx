import React, { useEffect, useRef, useState } from 'react';
import TeamList from '../components/Team/TeamList'
import { TeamListData } from '../config/TeamListData'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Team = () => {

    const teamRef = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {


            const tl = gsap.timeline({
                ease: 'power2',
                scrollTrigger: {
                    trigger: teamRef.current,
                    start: 'top 50%',
                    scrub: 1.5,
                    // markers: true,
                    onEnter: () => {
                        document.body.setAttribute('theme', 'white');
                    },
                    onEnterBack: () => {
                        document.body.setAttribute('theme', 'white');
                    },
                }
            });

        }, teamRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <>

            <section id='team__section' ref={teamRef} className="team w-full h-full relative py-48">

                <div className="text-center">
                    <h2 className='text-5xl font_neuemachina'>Our Team</h2>
                </div>

                <div className='mt-14'>
                    {
                        TeamListData.map((item) => <TeamList key={item.id} {...item} />)
                    }
                </div>

            </section>
        </>
    )
}

export default Team