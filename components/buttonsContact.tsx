import Link from "next/link";
import React from "react";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  name: string;
  colorHover: string;
  color?: string;
  target?: string;
  rel?: string;
  ariaLabel: string;
  showName?: boolean;
}

const BaseSocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon,
  name,
  colorHover,
  color = "text-white",
  target = "_blank",
  rel = "noopener noreferrer",
  ariaLabel,
  showName = true, // Valor por defecto true (mostrar nombre)
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`flex items-center px-4 py-2 text-sm font-medium bg-gray-800 rounded-lg transition-colors duration-300 ${colorHover} ${color} focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      aria-label={ariaLabel}
    >
      <svg
        className={`w-5 h-5 ${showName ? "mr-2" : ""}`}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {icon}
      </svg>
      {showName && name}
    </Link>
  );
};

// Tipos específicos para los componentes hijos
interface SocialButtonChildProps {
  showName?: boolean;
}

export const WhatsAppButton: React.FC<SocialButtonChildProps> = ({
  showName,
}) => (
  <BaseSocialButton
    href="https://wa.me/+12293106761?text=Hola,%20estoy%20interesado%20en%20sus%20servicios"
    icon={
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    }
    name="WhatsApp"
    colorHover="hover:!bg-green-500"
    ariaLabel="Contactar por WhatsApp"
    showName={showName}
  />
);

export const TelegramButton: React.FC<SocialButtonChildProps> = ({
  showName,
}) => (
  <BaseSocialButton
    href="https://t.me/+5353572645?text=Hola%20estoy%20interesado%20en%20sus%20servicios"
    icon={
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
    }
    name="Telegram"
    colorHover="hover:bg-blue-500"
    ariaLabel="Contactar por Telegram"
    showName={showName}
  />
);

export const PhoneButton: React.FC<SocialButtonChildProps> = ({ showName }) => (
  <BaseSocialButton
    href="tel:+5356591000"
    icon={
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    }
    name="+53 5659 1000"
    colorHover="hover:bg-red-500"
    target="_self"
    ariaLabel="Llamar por teléfono"
    showName={showName}
  />
);

export const MessengerButton: React.FC<SocialButtonChildProps> = ({
  showName,
}) => (
  <BaseSocialButton
    href="https://m.me/ivan.moya.1804?text=Hola%20estoy%20interesado%20en%20tus%20servicios"
    icon={
      <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C19.481 23.082 24 18.135 24 12c0-6.627-5.373-12-12-12z" />
    }
    name="Messenger"
    colorHover="hover:bg-blue-600"
    ariaLabel="Contactar por Messenger"
    showName={showName}
  />
);
