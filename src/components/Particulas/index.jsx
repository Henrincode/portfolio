// src/components/Particles.jsx
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function Particulas({ children, options, style }) {

    options = options || {
        background: { color: "#0d47a1" },
        fpsLimit: 60,
        particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 2 },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
            },
        },
    };
    
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // inicializa a engine slim
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
            {/* Partículas no fundo */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={options}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />

            {/* Conteúdo sobreposto */}
            <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
                {children}
            </div>
        </div>
    );
}