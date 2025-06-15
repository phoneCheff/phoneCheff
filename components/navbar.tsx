import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "lucide-react";
import Image from "next/image";
import { NavigationMenuDemo } from "./navigation-menu-nav";
import { ModeToggle } from "./ui/mode-toggle";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Acerca", href: "/#about-section", current: false },
  { name: "Desbloqueos", href: "/#desbloqueos", current: false },
  { name: "Ofertas", href: "/ofertas", current: false },
  { name: "Contacto", href: "/#Contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-black sticky top-0 z-50 shadow-sm dark:shadow-gray-800"
      aria-label="Navegación principal"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-10">
        <div className="relative flex h-18 items-center justify-between">
          {/* Mobile menu button - Mejorado accesibilidad */}
          <div className="absolute left-0 flex items-center sm:hidden">
            <DisclosureButton
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-label="Menú de navegación"
            >
              <span className="absolute -inset-0.5" />
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          {/* Contenedor principal flex */}
          <div className="flex flex-1 justify-center sm:justify-start ">
            {/* Logo con enlace a inicio - Mejor SEO */}
            <div className="flex flex-shrink-0 items-center justify-center">
              <Link
                href="/"
                className="rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Image
                  alt="Logo de PhoneCheff"
                  src="/images/logo1.png"
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                  priority
                />
              </Link>{" "}
              {/* ← Corregido */}
            </div>

            {/* Navegación desktop */}
            <div className="hidden  mt-4 sm:ml-6 sm:block flex-1">
              <div className="flex justify-center">
                <NavigationMenuDemo />
              </div>
            </div>

            {/* ModeToggle - Mejorado accesibilidad */}
            <div className="absolute right-0 flex items-center sm:relative mt-5">
              <ModeToggle aria-label="Alternar modo claro/oscuro" />
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil - Mejor semántica */}
      <DisclosurePanel className="sm:hidden">
        <ul className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <DisclosureButton
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-indigo-600 text-white dark:bg-indigo-800"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700",
                  "block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                )}
              >
                {item.name}
              </DisclosureButton>
            </li>
          ))}
        </ul>
      </DisclosurePanel>
    </Disclosure>
  );
}
