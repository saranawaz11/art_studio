'use client'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {

    useEffect(() => {
        if (typeof window === 'undefined') return

        const lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)
        const raf = (time: number) => {
            lenis.raf(time * 1000)
        }
        gsap.ticker.add(raf)
        gsap.ticker.lagSmoothing(0)
        return () => {
            gsap.ticker.remove(raf)
            lenis.destroy()
        }
    }, [])

    useEffect(() => {
        // Create masks after component mounts
        const imgs = document.querySelectorAll('.img')
        imgs.forEach((img) => {
            for (let i = 0; i < 9; i++) {
                const mask = document.createElement('div')
                mask.classList.add('mask', `m-${i}`)
                img.appendChild(mask)
            }
        })

        // Add your GSAP ScrollTrigger animations here
        // For example:
        imgs.forEach((img) => {
            const masks = img.querySelectorAll('.mask')
            gsap.to(masks, {
                scrollTrigger: {
                    trigger: img,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
                opacity: 1,
                stagger: 0.1
            })
        })
    }, [])
    return (
        <div id="scroll-animation">

            <section className="hero">
                <h1>Wastelanf Couture</h1>
            </section>

            <section className="info">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ratione nostrum animi aut laborum mollitia deserunt necessitatibus commodi excepturi. Quos doloremque soluta enim saepe quia possimus dolorum quo voluptatibus illo non minima iusto, magni nulla incidunt sed.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem iure consectetur alias voluptates facilis animi cupiditate. Voluptatem doloremque voluptatum aliquid quas id tempora.</p>
            </section>

            <section className="hero-imgs">
                <div className="row">
                    <div className="img img-1"></div>
                    <div className="img img-2"></div>
                </div>
            </section>

            <section className="clients-imgs">
                <div className="row">
                    <div className="img img-3"></div>
                </div>
            </section>

            <section className="products">
                <div className="row">
                    <div className="img"></div>
                    <div className="img img-4"></div>
                    <div className="img img-5"></div>
                    <div className="img"></div>
                </div>
                <div className="row">
                    <div className="img img-6"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img img-7"></div>
                </div>
                <div className="row">
                    <div className="img"></div>
                    <div className="img img-8"></div>
                    <div className="img"></div>
                    <div className="img img-9"></div>
                </div>
                <div className="row">
                    <div className="img img-10"></div>
                    <div className="img"></div>
                    <div className="img img-11"></div>
                    <div className="img img-12"></div>
                </div>
            </section>

            <section className="about">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, necessitatibus. Accusantium alias temporibus, ipsam error iusto, voluptatibus, tenetur beatae est quibusdam architecto autem facere!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium saepe beatae vero sed! Molestias, velit. Totam quae deserunt deleniti! Rem officiis possimus nisi?</p>
            </section>

            <section className="about-imgs">
                <div className="row">
                    <div className="img img-13">

                    </div>
                    <div className="img img-14"></div>
                </div>
            </section>

            <section className="outro">
                <div className="row">
                    <div className="img img-15"></div>
                    <div className="img img-16"></div>
                    <div className="img-img-17"></div>
                </div>
            </section>
        </div>
    );
}

export default ScrollAnimation;