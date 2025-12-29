'use client'
import Image from "next/image";
import { IMAGES_CONFIG } from "../(main)/_components/constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";


gsap.registerPlugin(ScrollTrigger, CustomEase);


const ZoomOutScroll = () => {
    const stickyContentContainer = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        // CustomEase.create(
        //     'slowStart',
        //     "M0,0,C0,0,0.028,0.215,0.045,0.276,0.051,0.299,0.061,0.326,0.07,0.34,0.076,0.351,0.07,0.356,0.1,0.375,0.25,0.472,0.71,0.543,0.875,0.612,0.907,0.626,0.906,0.626,0.915,0.634,0.925,0.644,0.939,0.67,0.945,0.683,0.952,0.699,0.96,0.729,0.965,0.751,0.977,0.807,1,1,1,1"
        // )
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyContentContainer.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.5
            }
        });
        tl.to('[data-scale]', {
            scale: 0.51,
            duration: 10
        });
        tl.to('[data-zoom-type="side"], [data-zoom-type="main"]',{
            clipPath: 'inset(10px round 10px)',
            ease: 'power4.out',
            duration: 10
        }, 0);
        tl.to('[data-scale], [data-text-center]', {
            y: '-25vh',
            ease: 'power2.in',
            duration: 10,
        }, 0)
    })

    return (
        <section ref={stickyContentContainer} className="relative h-[400vh] pt-5">

            <div className="sticky top-0 h-full overflow-hidden">

                <div data-scale className="relative h-screen w-screen will-change-transform">

                    <div data-section='top' className="absolute bottom-full h-screen w-screen">

                        {IMAGES_CONFIG.top.map((img, index) => (
                            <div key={`top-${index}`} className={`relative aspect-video h-screen w-screen ${img.position}`}>
                                <Image data-zoom-type={img.type}
                                src={img.src}
                                fill
                                alt="Image"
                                sizes="(max-width:640px) 1080px, 100vw"
                                className="object-cover"
                                priority={false}/>
                            </div>
                        ))}
                    </div>
                    <div data-section='center'>
                        {IMAGES_CONFIG.center.map((img, index) => (
                            <div key={`center-${index}`} className={`absolute aspect-video h-screen w-screen ${img.position}`}>
                                <Image data-zoom-type={img.type}
                                src={img.src}
                                fill
                                alt="Image"
                                sizes="(max-width:640px) 1080px, 100vw"
                                className="object-cover"
                                priority={img.type === 'main'}/>
                            </div>
                        ))}
                    </div>
                    <div data-section='bottom' className="absolute top-full h-screen w-screen">
                        {IMAGES_CONFIG.bottom.map((img, index) => (
                            <div key={`bottom-${index}`} className={`absolute aspect-video h-screen w-screen ${img.position}`}>
                                <Image data-zoom-type={img.type}
                                src={img.src}
                                fill
                                alt="Image"
                                sizes="(max-width:640px) 1080px, 100vw"
                                className="object-cover"
                                priority={false}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div data-text-center className="absolute top-1/2 left-1/2 w-[45vw] -translate-x-1/2 -translate-y-1/2 will-change-transform max-sm:w-[95vw]">
                        <p data-text= '1' className="text absolute top-1/2 block w-full -translate-y-1/2 text-center font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, fuga.</p>
                        <p data-text='2' className="text absolute top-1/2 block w-full -translate-y-1/2 text-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam!</p>
            </div>
        </section>
    );
}

export default ZoomOutScroll;