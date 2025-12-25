'use client'
import { stickyCardsData } from "@/app/(main)/_components/constants";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const StickyCards = () => {
    const container = useRef(null);
    useGSAP(() => {
        const stickyCards = document.querySelectorAll('.sticky-card');
        stickyCards.forEach((card, index) => {
            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    endTrigger: stickyCards[stickyCards.length - 1],
                    end: 'top top',
                    pin: true,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                })
            }
            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: stickyCards[index + 1],
                    start: 'top bottom',
                    end: 'top top',
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const scale = 1 - progress * 0.15;
                        const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                        const afterOpacity = progress;

                        gsap.set(card, {
                            scale: scale,
                            rotation: rotation,
                            "--after-opacity": afterOpacity,
                            duration: 0,
                            overwrite: 'auto',
                        })
                    }
                })
            }
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: container })
    return (
        <div ref={container} className='sticky-cards-wrapper'>
            {stickyCardsData.map((cardData, index) => (
                <div className="sticky-card" key={index}>
                    <div className="sticky-card-index">
                        <h1>{cardData.index}</h1>
                    </div>

                    <div className="sticky-card-content">
                        <div className="image">
                            <img src={cardData.img_src} alt="image" />
                        </div>
                        <div className="sticky-card-text">
                            <h3 className="text-5xl pb-4">{cardData.name}</h3>
                            <p>{cardData.descrption}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StickyCards;