'use client'
import gsap from 'gsap';
import { TransitionRouter } from 'next-transition-router';
import React, { useEffect, useRef } from 'react'

type TransitionProviderProps = {
  children: React.ReactNode;
};

const BLOCK_SIZE = 60;
function TransitionProvider({children}: TransitionProviderProps) {
    const transitionGridRef = useRef<HTMLDivElement | null>(null);
    const blockRef = useRef<HTMLDivElement[]>([]);

    const createTransitionGrid = () => {
        if (!transitionGridRef.current) return;

        const container = transitionGridRef.current;
        container.innerHTML = '';
        blockRef.current = [];

        const gridWidth = window.innerWidth;
        const gridHeight = window.innerHeight;

        const columns = Math.ceil(gridWidth / BLOCK_SIZE);
        const rows = Math.ceil(gridHeight / BLOCK_SIZE) + 1;

        const offsetX = (gridWidth - columns * BLOCK_SIZE) /2;
        const offsetY = (gridHeight - rows * BLOCK_SIZE) /2;

        for(let row = 0; row < rows; row++) {
          for(let column = 0; column < columns; column++){
            const block = document.createElement('div');
            block.className = 'transition-box';
            block.style.cssText = `
              width: ${BLOCK_SIZE}px;
              height: ${BLOCK_SIZE}px;
              left: ${column * BLOCK_SIZE + offsetX}px;
              top: ${row * BLOCK_SIZE + offsetY}px;
            `;
            container.appendChild(block);
            blockRef.current.push(block);
          }
        }
        gsap.set(blockRef.current, {opacity: 0})
    };

    useEffect(() => {
      createTransitionGrid();
      window.addEventListener('resize', createTransitionGrid)
      return () => window.removeEventListener('resize', createTransitionGrid)
    }, [])
  return (
    <TransitionRouter 
    auto
    leave={(next) => {
      const tween = gsap.to(blockRef.current, {
        opacity: 1,
        duration: 0.05,
        ease: 'power2.inOut',
        stagger: {amount: 0.5, from: 'random'},
        onComplete: next
      });
      return () => tween.kill();
    }}
    enter={(next)=> {
      gsap.set(blockRef.current, {opacity: 1});
      const tween = gsap.to(blockRef.current, {
        opacity: 0,
        duration: 0.05,
        delay: 0.3,
        ease: 'power2.inOut',
        stagger: {amount: 0.5, from: 'random'},
        onComplete: next
      });
      return () => tween.kill();
    }}>
        <div ref={transitionGridRef} className='transition-grid'/>
        {children}
    </TransitionRouter>
  )
}

export default TransitionProvider