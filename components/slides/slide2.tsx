"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ModelCanvas from "../ModelCanvas";

gsap.registerPlugin(ScrollTrigger);

const Slide2 = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      aria-label="Servicios de eliminación de cuentas y desbloqueos profesionales"
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-black dark:via-neutral-900 dark:to-neutral-950 transition-colors duration-500"
    >
      <div
        role="region"
        aria-label="Contenido principal"
        className="container mx-auto px-4 py-16 md:py-24 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <article ref={textRef} className="order-2 lg:order-1 space-y-6">
            <header>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                  ELIMINACIÓN DE CUENTAS
                </span>
                <br />
                <span className="text-blue-700 dark:text-cyan-400">
                  & DESBLOQUEOS PROFESIONALES
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mt-2">
                <span className="inline-flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">
                    iCloud
                  </span>
                  <span aria-hidden="true">•</span>
                  <span className="text-red-600 dark:text-red-400">Google</span>
                  <span aria-hidden="true">•</span>
                  <span className="text-orange-500 dark:text-orange-400">
                    MI Account
                  </span>
                </span>
              </h2>
            </header>
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Soluciones garantizadas para todas las marcas y modelos de
                dispositivos.
              </p>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Recupera el acceso completo a tu dispositivo en pocos pasos.
              </p>
            </div>
          </article>

          {/* Modelo 3D reemplazando imágenes */}
          <figure className="order-1 lg:order-2 h-[550px] w-full">
            {/*<ModelCanvas /> */}
            <ModelCanvas />
          </figure>
        </div>
      </div>

      {/* Efectos decorativos de fondo */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-16 -top-16 w-72 h-72 
          bg-blue-100 dark:bg-blue-600/30 
          rounded-full blur-3xl opacity-30 dark:opacity-40 
          mix-blend-lighten dark:mix-blend-screen"
        />
        <div
          className="absolute -left-20 -bottom-20 w-96 h-96 
          bg-purple-200 dark:bg-purple-600/30 
          rounded-full blur-3xl opacity-20 dark:opacity-30 
          mix-blend-lighten dark:mix-blend-screen"
        />
      </div>
    </section>
  );
};

export default Slide2;
