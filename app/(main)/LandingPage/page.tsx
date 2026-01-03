'use client'
import { useEffect, useState } from "react";
import { allPaintings } from "../_components/constants";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(SplitText);
const Landingpage = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % allPaintings.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        gsap.set('header .logo',
            {
                opacity: 0,
                y: -100
            }
        );
        gsap.set('.slider',
            {
                opacity: 0,
                y: -20
            });
        gsap.set('.name',
            {
                opacity: 0,
                y: 100
            }
        );

        const a = new SplitText("header a", { type: "words, chars" });
        gsap.set(a.chars, { opacity: 0, y: -100 });

        const tl = gsap.timeline();

        tl.to('header .logo', {
            opacity: 1,
            duration: 1,
            y: 0,
            ease: "power2.out"
        })

            .to(a.chars, {
                duration: 1.5,
                opacity: 1,
                y: 0,
                stagger: 0.05,
                ease: "power2.out"
            }, "-=0.5")

            .to('.slider', {
                opacity: 1,
                duration: 1.5,
                y: 0,
                ease: "power2.out"
            }, "-=1")

            .to('.name', {
                opacity: 1,
                duration: 1.5,
                y: 0,
                ease: "power2.out"
            }, "-=0.5");

        return () => {
            a.revert();
            tl.kill();
        };
    }, []);

    return (
        <div className="landing-page">
            <header>
                <div className="logo">
                    Arcline Studio
                </div>
                <Link href={`/paintings/${allPaintings[0].slug}`} className="btn">Explore More</Link>
            </header>

            <div className="imgs-containers">
                {allPaintings.map((img, i) => (
                    <div
                        key={i}
                        className={`slider ${index === i ? "active" : ""}`}
                        style={{
                            opacity: index === i ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                            position: index === i ? 'relative' : 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <Image
                            src={img.img_src}
                            alt={img.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={i === 0}
                            sizes="100vw"
                        />                    
                    </div>
                ))}
            </div>

            <div className="slider-bottom">
                {allPaintings.map((painting, i) => (
                    <div
                        key={i}
                        className={`name ${index === i ? "active" : ""}`}
                    >
                        <p>{painting.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Landingpage;