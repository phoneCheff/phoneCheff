"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import {
  Cell24,
  CellIcon,
  Price,
  Remote,
  Security,
} from "@/components/icons/myIcons";
import { Contact } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Soporte 24 horas",
    description:
      "Asistencia técnica disponible todo el día, incluso fines de semana y festivos, para resolver tus emergencias cuando lo necesites.",
    icon: Cell24,
    ariaLabel: "Icono de soporte 24/7",
  },
  {
    name: "Seguridad garantizada",
    description:
      "Procesos 100% seguros que protegen todos tus datos personales y la integridad de tu dispositivo durante el proceso.",
    icon: Security,
    ariaLabel: "Icono de seguridad",
  },
  {
    name: "Atención remota",
    description:
      "Servicio remoto y cómodo. Solucionamos tu problema desde cualquier ubicación mediante conexión segura.",
    icon: Remote,
    ariaLabel: "Icono de atención remota",
  },
  {
    name: "Múltiples vías de contacto",
    description:
      "WhatsApp, correo electrónico, telegram y llamadas. Elige el medio que prefieras para comunicarte con nosotros.",
    icon: Contact,
    ariaLabel: "Icono de múltiples contactos",
  },
  {
    name: "Precios competitivos",
    description:
      "Ofrecemos el mejor balance entre calidad y economía en el mercado.",
    icon: Price,
    ariaLabel: "Icono de precios",
  },
  {
    name: "Flexibilidad de pagos",
    description:
      "Aceptamos una amplia variedad de tarjetas, transferencias bancarias y métodos electrónicos para tu comodidad.",
    icon: CellIcon,
    ariaLabel: "Icono de métodos de pago",
  },
];

export default function Revisar() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-section"
      aria-labelledby="about-heading"
      className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 py-20 sm:py-24 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center mb-14">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase">
            Expertos en liberación
          </span>
          <h2
            id="about-heading"
            className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Desbloqueos certificados para todas las marcas
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Utilizamos métodos autorizados por fabricantes para garantizar
            resultados permanentes sin afectar tu garantía o funcionalidades del
            dispositivo.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2">
          {features.map((feature) => (
            <li
              key={feature.name}
              className="feature-card relative pt-16 pb-8 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-4 focus-within:ring-indigo-400"
            >
              <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-indigo-600 border-4 border-white shadow-lg"
                aria-label={feature.ariaLabel}
              >
                <feature.icon
                  aria-hidden="true"
                  className="w-10 h-10 text-white"
                />
              </div>

              <h3 className="text-xl font-semibold text-indigo-600 text-center mb-3">
                {feature.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
