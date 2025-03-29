import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TesteTres(){
    useEffect(() => {
        gsap.to(".box", {
        x: 100,          // move 100px para a direita
        rotation: 360,   // gira 360 graus
        duration: 2,     // duração de 2 segundos
        ease: "bounce.out" // efeito de easing (suavização)
    })
}, [])

    return(
       <div className="box" style={{
        width:"100px",
        height:"100px",
        backgroundColor:"#ff5e5e",
        borderRadius:"8px",
        margin:"50px",
       }}></div>
    )
}
