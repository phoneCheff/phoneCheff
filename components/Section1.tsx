"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { TelegramButton, WhatsAppButton } from "./buttonsContact";
import Smartphone from "./Prueba";
import StyledButton from "./StyledButton";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
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
      id="desbloqueos"
      ref={containerRef}
      aria-label="Servicios de desbloqueo de dispositivos"
      className="relative z-10 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-gray-900 dark:via-neutral-900 dark:to-neutral-950 transition-colors duration-500 py-16"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
        {/* Modelo 3D o ilustración */}
        <div
          role="img"
          aria-label="Dispositivos móviles desbloqueados"
          className="flex justify-center"
        >
          <Smartphone />
        </div>

        {/* Contenido textual */}
        <div ref={textRef}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white mb-6">
            Soluciones profesionales para desbloqueos y liberaciones de
            dispositivos
          </h2>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
            {[
              {
                service: "Eliminación de cuentas",
                brand: "ICLOUD",
                id: "icloud",
              },
              {
                service: "Eliminación de cuentas de",
                brand: "GOOGLE",
                id: "google",
              },
              {
                service: "Eliminación de cuentas",
                brand: "MI de Xiaomi",
                id: "xiaomi",
              },
              {
                service: "Eliminación de cuentas",
                brand: "MDM",
                id: "Contact",
              },
              {
                service: "Desbloqueos de",
                brand: "Red para cualquier compañía",
                id: "network",
              },
              { service: "", brand: "Otros servicios", id: "otros" },
            ].map((item, index) => (
              <li key={index} id={item.id} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  {item.service && <span className="mr-1">{item.service}</span>}
                  <strong className="text-slate-900 dark:text-white">
                    {item.brand}
                  </strong>
                </span>
              </li>
            ))}
            <StyledButton />
          </ul>

          <section aria-labelledby="Contact">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Contáctanos:
            </h3>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton />
              <TelegramButton />
              {/* <MessengerButton showName={false} /> */}
            </div>
          </section>
        </div>
      </div>

      {/* Decoración */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-600/30 rounded-full blur-3xl opacity-20 dark:opacity-40 mix-blend-lighten dark:mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 dark:bg-purple-700/30 rounded-full blur-3xl opacity-20 dark:opacity-40 mix-blend-lighten dark:mix-blend-screen" />
      </div>
    </section>
  );
};

export default Section1;
