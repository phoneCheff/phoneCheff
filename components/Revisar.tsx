import {
  Cell24,
  CellIcon,
  Price,
  Remote,
  Security,
} from "@/components/icons/myIcons";
import { Contact } from "lucide-react";

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
  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="bg-background py-16 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <span className="text-base/7 font-semibold text-indigo-600">
            Expertos en liberación
          </span>
          <h2
            id="about-heading"
            className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-primary-background sm:text-5xl lg:text-balance"
          >
            Desbloqueos certificados para todas las marcas
          </h2>
          <p className="mt-6 text-lg/8 text-primary-background">
            Utilizamos métodos autorizados por fabricantes para garantizar
            resultados permanentes sin afectar tu garantía o funcionalidades del
            dispositivo.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <ul className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <li
                key={feature.name}
                className="relative pt-16 pb-6 px-6 border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-background text-center focus-within:ring-2 focus-within:ring-indigo-500"
              >
                {/* Ícono con descripción accesible */}
                <div
                  className="absolute left-1/2 -top-8 transform -translate-x-1/2 flex size-16 items-center justify-center rounded-full bg-indigo-600 border-4 border-white shadow-lg"
                  aria-label={feature.ariaLabel}
                >
                  <feature.icon
                    aria-hidden="true"
                    className="size-8 text-white"
                  />
                </div>

                {/* Contenido */}
                <h3 className="text-lg font-semibold text-indigo-600">
                  {feature.name}
                </h3>
                <p className="mt-3 text-base text-primary-background text-pretty">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
