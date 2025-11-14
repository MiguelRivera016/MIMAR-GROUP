import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600","700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mimargroup-hn.lat"),
  title: { default: "MIMAR GROUP — Innovación que impulsa negocios", template: "%s | MIMAR GROUP" },
  description: "Sede corporativa de MIMAR GROUP: innovación, divisiones de negocio, proyectos y alianza con clientes.",
  openGraph: {
    type: "website",
    url: "https://mimargroup-hn.lat",
    title: "MIMAR GROUP — Innovación que impulsa negocios",
    description: "Empresa tecnológica con divisiones: Solutions, Education, Real Estate.",
    siteName: "MIMAR GROUP",
    images: [{ url: "/assets/images/og-corporativo.png", width: 1200, height: 630, alt: "MIMAR GROUP" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mimargroup-hn.lat" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Organization",
    name: "MIMAR GROUP", url: "https://mimargroup-hn.lat",
    email: "mimargrouphn@gmail.com", telephone: "+50493870479",
    address: { "@type": "PostalAddress", addressCountry: "HN", addressLocality: "San Pedro Sula" },
    sameAs: ["https://www.linkedin.com","https://www.facebook.com"],
    logo: "https://mimargroup-hn.lat/assets/branding/logo-group.png"
  };
  return (
    <html lang="es">
      <body className={poppins.className + " bg-white text-ink-900 antialiased"}>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:rounded-md focus:bg-group-600 focus:px-3 focus:py-2 focus:text-white">Saltar al contenido</a>
        <Navbar brandClass={playfair.className} />
        <main id="contenido" className="min-h-[60vh]">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
