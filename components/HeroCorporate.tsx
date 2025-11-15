"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCorporate() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-group-700 to-group-500" />
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(60%_55%_at_20%_30%,black,transparent)]">
        <div className="h-full w-full bg-white/10" />
      </div>

      <div className="relative z-10 container-pro section-pad">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-white"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[12px] uppercase tracking-wider text-white/80"
            >
              Grupo Corporativo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl"
            >
              Innovación que impulsa negocios
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 max-w-xl text-white/90"
            >
              En MIMAR GROUP unimos tecnología y visión empresarial para construir soluciones de alto impacto.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/empresas" className="btn-primary">Empresas del grupo</Link>
              <Link href="/contacto" className="btn-ghost">Contacto corporativo</Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="rounded-xl2 bg-white/95 p-4 shadow-card ring-1 ring-black/10">
              <div className="mb-3 flex items-center gap-1">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-2.5 w-2.5 rounded-full bg-rose-400"
                />
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3, ease: "linear" }}
                  className="h-2.5 w-2.5 rounded-full bg-amber-400"
                />
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6, ease: "linear" }}
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                />
              </div>
              <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
                <Image
                  src="/assets/images/og-corporativo.png"
                  alt="Visión corporativa"
                  width={1200}
                  height={630}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
