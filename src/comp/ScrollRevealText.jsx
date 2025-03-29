"use client"; // Se estiver usando Next.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollRevealText({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll("*");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 }, // Começa invisível
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Ajuste para melhor visibilidade
            toggleActions: "play none none none",
          },
        }
      );
    });

  }, []);

  return <div ref={containerRef}>{children}</div>;
}