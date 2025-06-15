"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { TelegramButton, WhatsAppButton } from "./buttonsContact";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  modelos: string[];
  minPrice: number;
  maxPrice: number;
}

interface ProductGroup {
  title: string;
  image: string;
  products: Product[];
}

const productsData: ProductGroup[] = [
  {
    title: "Bypass de cuentas iCloud",
    image: "/images/ofertas1/iphone_bypass.avif",
    products: [
      {
        id: 1,
        modelos: [
          "iPhone 6",
          "iPhone 6 Plus",
          "iPhone 6s",
          "iPhone 6s Plus",
          "iPhone SE (1ª generación)",
          "iPhone 7",
          "iPhone 7 Plus",
          "iPhone 8",
          "iPhone 8 Plus",
          "iPhone X",
        ],
        minPrice: 10,
        maxPrice: 60,
      },
      {
        id: 2,
        modelos: [
          "iPhone XS",
          "iPhone XS Max",
          "iPhone XR",
          "iPhone 11",
          "iPhone 11 Pro",
          "iPhone 11 Pro Max",
          "iPhone SE (2ª generación)",
          "iPhone SE (3ª generación)",
          "iPhone 12 mini",
          "iPhone 12",
        ],
        minPrice: 63,
        maxPrice: 80,
      },
      {
        id: 3,
        modelos: [
          "iPhone 12 Pro",
          "iPhone 12 Pro Max",
          "iPhone 13 mini",
          "iPhone 13",
          "iPhone 13 Pro",
          "iPhone 13 Pro Max",
          "iPhone 14",
          "iPhone 14 Plus",
          "iPhone 14 Pro",
          "iPhone 14 Pro Max",
        ],
        minPrice: 80,
        maxPrice: 115,
      },
      {
        id: 4,
        modelos: [
          "iPhone 15",
          "iPhone 15 Plus",
          "iPhone 15 Pro",
          "iPhone 15 Pro Max",
          "iPhone 16",
          "iPhone 16 Plus",
          "iPhone 16 Pro",
          "iPhone 16 Pro Max",
          "",
          "",
        ],
        minPrice: 100,
        maxPrice: 135,
      },
    ],
  },
  {
    title: "Eliminación de cuentas iCloud de raíz",
    image: "/images/ofertas1/iphone_raiz.avif",
    products: [
      {
        id: 5,
        modelos: [
          "iPhone 6",
          "iPhone 6 Plus",
          "iPhone 6s",
          "iPhone 6s Plus",
          "iPhone SE (1ª generación)",
          "iPhone 7",
          "iPhone 7 Plus",
          "iPhone 8",
          "iPhone 8 Plus",
          "iPhone X",
        ],
        minPrice: 30,
        maxPrice: 60,
      },
      {
        id: 6,
        modelos: [
          "iPhone XS",
          "iPhone XS Max",
          "iPhone XR",
          "iPhone 11",
          "iPhone 11 Pro",
          "iPhone 11 Pro Max",
          "iPhone SE (2ª generación)",
          "iPhone SE (3ª generación)",
          "iPhone 12 mini",
          "iPhone 12",
        ],
        minPrice: 63,
        maxPrice: 80,
      },
      {
        id: 7,
        modelos: [
          "iPhone 12 Pro",
          "iPhone 12 Pro Max",
          "iPhone 13 mini",
          "iPhone 13",
          "iPhone 13 Pro",
          "iPhone 13 Pro Max",
          "iPhone 14",
          "iPhone 14 Plus",
          "iPhone 14 Pro",
          "iPhone 14 Pro Max",
        ],
        minPrice: 80,
        maxPrice: 115,
      },
      {
        id: 8,
        modelos: [
          "iPhone 15",
          "iPhone 15 Plus",
          "iPhone 15 Pro",
          "iPhone 15 Pro Max",
          "iPhone 16",
          "iPhone 16 Plus",
          "iPhone 16 Pro",
          "iPhone 16 Pro Max",
          "",
          "",
        ],
        minPrice: 100,
        maxPrice: 135,
      },
    ],
  },
  {
    title: "Bypass de cuentas iCloud a MacBook",
    image: "/images/ofertas1/mac_bypass.avif",
    products: [
      {
        id: 10,
        modelos: ["Todos los modelos"],
        minPrice: 40,
        maxPrice: 80,
      },
    ],
  },
  {
    title: "Eliminación de cuentas iCloud a MacBook de raíz",
    image: "/images/ofertas1/mac_raiz.avif",
    products: [
      {
        id: 11,
        modelos: ["Todos los modelos"],
        minPrice: 100,
        maxPrice: 220,
      },
    ],
  },
  {
    title: "Creación de Apple ID",
    image: "/images/ofertas1/appleID.avif",
    products: [
      {
        id: 12,
        modelos: ["Todos los modelos"],
        minPrice: 5,
        maxPrice: 10,
      },
    ],
  },
  {
    title: "Eliminación de cuentas Google",
    image: "/images/ofertas1/google_account.avif",
    products: [
      {
        id: 9,
        modelos: [
          "Samsung Serie S",
          "Samsung Serie Note",
          "Samsung Serie A",
          "Samsung Serie F",
          "Samsung Serie M",
        ],
        minPrice: 5,
        maxPrice: 60,
      },
    ],
  },
  {
    title: "Eliminación de cuentas MI de Xiaomi",
    image: "/images/ofertas1/xiaomi_account.avif",
    products: [
      {
        id: 13,
        modelos: ["Todos los modelos"],
        minPrice: 5,
        maxPrice: 40,
      },
    ],
  },
  {
    title: "Desbloqueos de red para varias compañías",
    image: "/images/ofertas1/unlocks.avif",
    products: [
      {
        id: 14,
        modelos: ["Numerosas marcas y compañías"],
        minPrice: 5,
        maxPrice: 80,
      },
    ],
  },
];

const CardsOfferts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Aplanamos productos para renderizar en tarjetas individuales
  const allProducts = productsData.flatMap((group) =>
    group.products.map((product) => ({
      ...product,
      groupTitle: group.title,
      groupImage: group.image,
    }))
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".card-offert", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 max-w-7xl mx-auto"
    >
      {allProducts.map((product) => (
        <article
          key={`${product.groupTitle}-${product.id}`}
          className="card-offert rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900 transition-shadow hover:shadow-lg focus-within:ring-4 focus-within:ring-indigo-400"
          role="region"
          aria-labelledby={`product-title-${product.id}`}
          tabIndex={0}
        >
          <div className="relative h-48 w-full mb-5 rounded-md overflow-hidden">
            <Image
              src={product.groupImage}
              alt={product.groupTitle}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          </div>

          <h3
            id={`product-title-${product.id}`}
            className="mb-3 text-lg font-semibold text-gray-900 dark:text-white"
          >
            {product.groupTitle}
          </h3>

          <section aria-label="Modelos compatibles">
            <h4 className="mb-2 text-md font-medium text-gray-700 dark:text-gray-300">
              Modelos compatibles:
            </h4>
            <ul className="space-y-1 pr-2">
              {product.modelos.filter(Boolean).map((modelo, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-400 text-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {modelo}
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-5 text-2xl font-extrabold text-gray-900 dark:text-white">
            ${product.minPrice.toLocaleString()} - $
            {product.maxPrice.toLocaleString()} USD
          </p>

          <div className="flex justify-center gap-4 mt-5 flex-wrap">
            <WhatsAppButton showName={false} />
            <TelegramButton showName={false} />
            {/* <MessengerButton showName={false} /> */}
          </div>
        </article>
      ))}
    </div>
  );
};

export default CardsOfferts;
