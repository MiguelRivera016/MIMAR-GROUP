"use client";
import { motion } from "framer-motion";
import FadeInView from "./FadeInView";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MIMAR Solutions transformó completamente nuestra operación digital. La plataforma que desarrollaron aumentó nuestra eficiencia en un 45%.",
      author: "Ana Martínez",
      role: "CEO, Comercializadora del Norte",
      company: "Cliente MIMAR Solutions",
      metric: "+45% eficiencia",
    },
    {
      quote: "El equipo de MIMAR GROUP entiende las necesidades del mercado hondureño. Su enfoque profesional y resultados medibles nos dieron la confianza para expandir nuestros proyectos.",
      author: "Carlos Hernández",
      role: "Director de Operaciones",
      company: "Fundación Visión Global",
      metric: "+60% alcance digital",
    },
    {
      quote: "La infraestructura en la nube que implementaron ha sido impecable. 99.9% de uptime en los últimos 18 meses. Un partner tecnológico confiable.",
      author: "Roberto Gómez",
      role: "CTO",
      company: "FinTech Honduras",
      metric: "99.9% uptime",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container-pro">
        <FadeInView>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-group-100 px-4 py-1.5 text-xs font-semibold text-group-700 uppercase tracking-wider">
              Testimonios
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Resultados que hablan por sí mismos
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Nuestros clientes confían en nosotros para impulsar sus negocios con tecnología de vanguardia.
            </p>
          </div>
        </FadeInView>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <FadeInView key={idx} delay={idx * 0.15}>
              <motion.div
                className="flex h-full flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200 md:p-8"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Métrica destacada */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-group-500 to-group-600 px-3 py-1.5 text-sm font-bold text-white shadow-sm">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {testimonial.metric}
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-base leading-relaxed text-ink-700">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Autor */}
                <div className="mt-6 border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-group-500 to-group-600 text-lg font-bold text-white">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-ink-900">{testimonial.author}</div>
                      <div className="text-sm text-ink-600">{testimonial.role}</div>
                      <div className="text-xs text-ink-500">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        {/* Stats bar */}
        <FadeInView delay={0.5}>
          <div className="mt-16 grid gap-6 rounded-xl2 bg-gradient-to-r from-group-700 to-group-500 p-8 text-white md:grid-cols-4 md:p-12">
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-1 text-sm text-white/80">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">98%</div>
              <div className="mt-1 text-sm text-white/80">Satisfacción del cliente</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">5+</div>
              <div className="mt-1 text-sm text-white/80">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">24/7</div>
              <div className="mt-1 text-sm text-white/80">Soporte técnico</div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
