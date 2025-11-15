"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/empresas", label: "Empresas" },
  { href: "/proyectos", label: "Proyectos & Prensa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar({ brandClass = "" }: { brandClass?: string }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/branding/logo-group.png"
            alt="MIMAR GROUP"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className={"text-base font-semibold " + brandClass}>MIMAR GROUP</span>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 " +
                  (active ? "text-group-600" : "text-ink-600")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contacto" className="btn-primary hidden md:inline-flex">Contáctanos</Link>

          {/* Botón menú hamburguesa (móvil) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-group-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Menú de navegación"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay móvil */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menú móvil (drawer desde la derecha) */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <span className={"text-base font-semibold " + brandClass}>MIMAR GROUP</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-2 text-ink-700 hover:bg-slate-100"
            aria-label="Cerrar menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "rounded-md px-4 py-3 text-base font-medium transition-colors " +
                  (active
                    ? "bg-group-50 text-group-700 border-l-4 border-group-600"
                    : "text-ink-700 hover:bg-slate-50")
                }
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="btn-primary mt-4 w-full justify-center"
          >
            Contáctanos
          </Link>
        </nav>

        {/* Footer del menú móvil */}
        <div className="absolute bottom-0 left-0 right-0 border-t bg-slate-50 p-4">
          <p className="text-xs text-ink-600">
            San Pedro Sula, Honduras<br />
            <a href="mailto:mimargrouphn@gmail.com" className="text-group-600 hover:underline">
              mimargrouphn@gmail.com
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
