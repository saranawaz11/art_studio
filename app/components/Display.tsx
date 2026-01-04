'use client'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";
import { displayImages, performanceImgPositions } from "../(main)/_components/constants";
import Image from "next/image";

const Display = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

    useGSAP(() => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            if (isMobile) return;

            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "center center",       
                    scrub: 1,
                    invalidateOnRefresh: true,
                    markers: true
                },
            });

            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars: gsap.TweenVars = {};

                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                tl.to(selector, vars, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );

    return (
        <section id="performance" ref={sectionRef}>

            <div className="wrapper">
                {displayImages.map((item, index) => (
                    <Image
                        key={index}
                        src={item.img_src}
                        className={item.id}
                        alt={`Performance Image #${index + 1}`}
                        width={560}
                        height={700}
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '28rem',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        sizes="(max-width: 1024px) 10rem, (max-width: 1536px) 27rem, 35rem"
                    />
                ))}
            </div>

            <div className="content" style={{ color: '#052e16' }}>
                <p style={{ color: '#052e16' }}>“Look deep into nature, and then you will understand everything better.”  Albert Einstein
                </p>
                <p style={{ color: '#052e16', fontWeight: '900' }}>“Nature does great things swiftly, so it is more important to be still than to hurry.” – Milton Leeds</p>
            </div>
        </section>
    )
}
export default Display