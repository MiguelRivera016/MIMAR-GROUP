"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInView from "./FadeInView";

export default function CompaniesGrid() {
  const items = [
    {
      id: "mimar-solutions",
      t: "MIMAR Solutions",
      d: "División tecnológica: software a medida, apps móviles, sitios web, nube y soporte.",
      href: "https://mimarsolutions.lat",
      badge: "Tecnología",
    },
    {
      id: "mimarapp",
      t: "MIMARAPP",
      d: "Aplicación para contratar servicios con proveedores verificados.",
      href: "/empresas#mimarapp",
      badge: "App",
    },
    {
      id: "real-estate",
      t: "MIMAR Real Estate",
      d: "Próximamente: soluciones inmobiliarias con enfoque tecnológico.",
      href: "/empresas#real-estate",
      badge: "Real Estate",
    },
  ];

  return (
    <section className="container-pro section-pad">
      <FadeInView>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Empresas que forman parte del grupo</h2>
          <p className="mt-2 text-ink-600">
            Marcas y unidades que integran el ecosistema MIMAR.
          </p>
        </div>
      </FadeInView>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((it, idx) => (
          <FadeInView key={it.id} delay={idx * 0.1}>
            <motion.article
              id={it.id}
              className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200 h-full transition-shadow hover:shadow-xl"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{it.t}</h3>
                <span className="rounded-full bg-gold-50 px-2 py-0.5 text-xs font-medium text-gold-600 ring-1 ring-gold-200">
                  {it.badge}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-600">{it.d}</p>
              <div className="mt-4">
                <Link href={it.href} className="btn-ghost">Ver más</Link>
              </div>
            </motion.article>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
