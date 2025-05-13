import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "PhoneCheff",
    template: "%s | PhoneCheff",
  },
  description:
    "Soluciones tecnológicas personalizadas para tu negocio. PhoneCheff cocina la solución perfecta para tus necesidades digitales.",
  keywords: [
    "tecnología",
    "soluciones digitales",
    "Desbloqueos",
    "Cuentas",
    "ICLOUD",
    "CUENTA GOOGLE",
    "CUENTA MI",
    "FRP",
  ],
  openGraph: {
    title: "PhoneCheff - Soluciones Digitales",
    description: "Expertos en desarrollo de soluciones tecnológicas a medida",
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "PhoneCheff",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PhoneCheff - Soluciones Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhoneCheff - Soluciones Digitales",
    description: "Expertos en desarrollo de soluciones tecnológicas a medida",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "", // Añade esto si usas Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={roboto.className} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          aria-live="polite"
        >
          <NavBar />

          <main
            id="main-content"
            className="flex-grow"
            tabIndex={-1}
            aria-label="Contenido principal"
          >
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
