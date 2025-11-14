"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/empresas", label: "Empresas" },
  { href: "/proyectos", label: "Proyectos & Prensa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar({ brandClass = "" }: { brandClass?: string }) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/branding/logo-group.png" alt="MIMAR GROUP" className="h-8 w-8" />
          <span className={"text-base " + brandClass}>MIMAR GROUP</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-50 " +
                  (active ? "text-group-600" : "text-ink-600")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contacto" className="btn-primary">Contáctanos</Link>
        </div>
      </div>
    </header>
  );
}
