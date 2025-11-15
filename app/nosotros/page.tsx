"use client";
import FadeInView from "@/components/FadeInView";
import { motion } from "framer-motion";

export default function Nosotros() {
  const team = [
    {
      name: "Miguel Rivera",
      role: "CEO & Fundador",
      area: "Estrategia y Visión Corporativa",
      bio: "Ingeniero con visión empresarial enfocado en transformación digital.",
    },
    {
      name: "Equipo Técnico",
      role: "CTO",
      area: "Arquitectura y Desarrollo",
      bio: "Especialistas en cloud, desarrollo full-stack y DevOps.",
    },
    {
      name: "Equipo de Negocios",
      role: "Director Comercial",
      area: "Relaciones y Crecimiento",
      bio: "Expertos en estrategia comercial y expansión de mercado.",
    },
  ];

  const timeline = [
    { year: "2019", event: "Fundación de MIMAR Solutions", description: "Inicio como consultora tecnológica especializada en desarrollo de software." },
    { year: "2021", event: "Expansión del portafolio", description: "Incorporación de servicios de infraestructura en la nube y soporte técnico." },
    { year: "2023", event: "Formación de MIMAR GROUP", description: "Creación del grupo corporativo con tres divisiones de negocio." },
    { year: "2024", event: "Crecimiento regional", description: "Consolidación en Honduras y planes de expansión centroamericana." },
  ];

  const values = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Disciplina",
      description: "Cumplimos nuestros compromisos con rigor y profesionalismo.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Claridad",
      description: "Comunicación transparente y honesta en cada proyecto.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Calidad",
      description: "Excelencia técnica en cada línea de código y decisión estratégica.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Servicio",
      description: "Orientación total hacia el éxito de nuestros clientes.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-group-700 to-group-500 py-20 text-white">
        <div className="container-pro">
          <FadeInView>
            <h1 className="text-4xl font-bold md:text-5xl">Sobre MIMAR GROUP</h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90">
              Somos un grupo empresarial hondureño con foco en innovación aplicada. Integramos tecnología,
              procesos y talento para construir soluciones duraderas que impulsan el crecimiento de nuestros clientes.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="container-pro py-20">
        <FadeInView>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Nuestros Pilares</h2>
            <p className="mt-3 text-ink-600">Los valores que guían cada decisión y proyecto.</p>
          </div>
        </FadeInView>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <FadeInView key={value.title} delay={idx * 0.1}>
              <motion.div
                className="flex flex-col items-center text-center rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-group-500 to-group-600 text-white">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{value.description}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-20">
        <div className="container-pro">
          <FadeInView>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Nuestra Historia</h2>
              <p className="mt-3 text-ink-600">Un recorrido de crecimiento sostenible y compromiso con la excelencia.</p>
            </div>
          </FadeInView>

          <div className="mt-12 space-y-8">
            {timeline.map((item, idx) => (
              <FadeInView key={item.year} delay={idx * 0.15}>
                <motion.div
                  className="flex gap-6 rounded-xl bg-white p-6 shadow-card ring-1 ring-slate-200 md:p-8"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-group-500 to-group-600 text-xl font-bold text-white">
                      {item.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">{item.event}</h3>
                    <p className="mt-2 text-ink-600">{item.description}</p>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-pro py-20">
        <FadeInView>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Equipo Directivo</h2>
            <p className="mt-3 text-ink-600">
              Líderes con experiencia en tecnología, negocios y gestión de proyectos.
            </p>
          </div>
        </FadeInView>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {team.map((member, idx) => (
            <FadeInView key={member.name} delay={idx * 0.15}>
              <motion.div
                className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200 text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-group-500 to-group-600 text-3xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink-900">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-group-600">{member.role}</p>
                <p className="mt-2 text-xs text-ink-500 uppercase tracking-wider">{member.area}</p>
                <p className="mt-3 text-sm text-ink-600">{member.bio}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-group-600 to-group-500 py-16">
        <div className="container-pro text-center">
          <FadeInView>
            <h2 className="text-3xl font-bold text-white">¿Listo para trabajar juntos?</h2>
            <p className="mt-3 text-lg text-white/90">
              Únete a las empresas que ya confían en MIMAR GROUP para su transformación digital.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/contacto" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-group-700 shadow-lg hover:bg-white/95 transition-colors">
                Contáctanos
              </a>
              <a href="/empresas" className="inline-flex items-center gap-2 rounded-lg bg-black/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-black/20 transition-colors">
                Ver empresas del grupo
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
