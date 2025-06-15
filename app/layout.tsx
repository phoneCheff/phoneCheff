import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
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
    url: "https://phone-cheff.vercel.app/",
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
    google: "jWW1GP8EKKP6NSDRtbMOVV48IwEC5Wu55YcxfhEYoZA", // Añade esto si usas Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={roboto.className} suppressHydrationWarning>
      <Head>
        {/* Verificación de Google */}
        <meta
          name="google-site-verification"
          content="jWW1GP8EKKP6NSDRtbMOVV48IwEC5Wu55YcxfhEYoZA"
        />

        {/* Meta básicas */}
        <meta name="author" content="PhoneCheff" />
        <meta name="application-name" content="PhoneCheff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="format-detection"
          content="telephone=no,email=no,address=no"
        />

        {/* App en móviles */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Manifest & Icons */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
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
