import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4"
      aria-label="Pie de página"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo con enlace accesible */}
          <Link
            href="#home"
            className="rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 md:mb-0"
            aria-label="Ir al inicio"
          >
            <Image
              alt="Logo de PhoneCheff"
              src="/images/logo1.png"
              width={80}
              height={80}
              className="h-20 w-auto "
              priority={false}
              loading="lazy"
            />
          </Link>

          {/* Navegación del footer */}
          <nav aria-label="Navegación secundaria">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href={"/"}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-md px-2 py-1"
                >
                  Acerca
                </Link>
              </li>
              <li>
                <Link
                  href="#desbloqueos"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-md px-2 py-1"
                >
                  Desbloqueos
                </Link>
              </li>
              <li>
                <Link
                  href="#Contact"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-md px-2 py-1"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Separador */}
        <hr
          className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          aria-hidden="true"
        />

        {/* Derechos de autor */}
        <div className="text-center">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © {currentYear}{" "}
            <Link
              href="#home"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-md px-1"
            >
              PhoneCheff™
            </Link>
            . Todos los derechos reservados.
          </span>

          {/* Texto adicional recomendado para SEO */}
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Especialistas en desbloqueo y liberación de dispositivos móviles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
