import React, { useEffect } from 'react';
import gsap from 'gsap';

const TeamList = ({ name, work, src, alt, id }) => {

    useEffect(() => {
        const teamList = gsap.utils.toArray('.team_list');

        let ctx = gsap.context(() => {
            teamList.forEach((item) => {
                const bgElement = item.querySelector('.team_list_bg');
                const imgElement = item.querySelector('.team_list_img');

                item.addEventListener('mouseenter', () => {
                    gsap.to(bgElement, {
                        height: '100%',
                    });
                    gsap.to(imgElement, {
                        opacity: 1,
                    });
                });

                item.addEventListener('mousemove', (e) => {
                    gsap.to(imgElement, {
                        ease: 'power3',
                        duration: 1,
                        x: e.clientX - 50,
                        // x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
                    });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(bgElement, {
                        height: '0%',
                    });
                    gsap.to(imgElement, {
                        opacity: 0,
                    });
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <ul className='w-[95%] sm:w-[90%] mx-auto'>
                <li className='team_list w-full cursor-pointer flex flex-col sm:flex-row sm:justify-between items-center py-10 border-b-2 border-black relative'>
                    <div className='flex items-center sm:gap-20 sm:pl-10'>
                        <span className='text-gray-400 hidden sm:block text-5xl font_neuemachina'>0{id}</span>
                        <span className='capitalize text-2xl sm:text-4xl font_neuemachina'>{name}</span>
                    </div>

                    <span className='text-xl sm:pr-10'>{work}</span>
                    {/* left-1/2 -translate-x-1/2 use this when you'll using mapRange() */}

                    <div className='absolute top-1/2 -translate-y-1/2 sm:top-auto sm:-translate-y-0'>
                        <div style={{ transitionDuration: '0.4s' }} className="team_list_img transition_card w-52 h-52 overflow-hidden rounded-full opacity-0">
                            <img className='w-full h-full object-cover object-right rounded-full' src={src} alt={alt} />
                        </div>
                    </div>
                    <div className="team_list_bg transition_card absolute left-0 bottom-0 bg-[#2544EE] -z-10 h-0 w-full" style={{ transitionDuration: '0.25s' }}></div>

                </li>
            </ul>
        </>
    );
}

export default TeamList;
