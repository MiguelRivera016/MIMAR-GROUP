export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-50 via-white to-brand-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Tecnología que{" "}
            <span className="text-brand-600">transforma</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-600 max-w-2xl mx-auto">
            Avera Technologies es la empresa matriz detrás de soluciones
            innovadoras que simplifican la vida de las personas en Honduras y
            Centroamérica.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#productos"
              className="px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition"
            >
              Nuestros Productos
            </a>
            <a
              href="#nosotros"
              className="px-8 py-3 border-2 border-brand-600 text-brand-600 rounded-lg font-semibold hover:bg-brand-50 transition"
            >
              Conócenos
            </a>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Sobre <span className="text-brand-600">Avera</span>
          </h2>
          <p className="text-center text-ink-600 max-w-2xl mx-auto mb-12">
            Somos una empresa de tecnología dedicada a desarrollar plataformas
            digitales que conectan, mueven y cuidan a las personas.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Misión",
                desc: "Crear soluciones tecnológicas accesibles que mejoren la calidad de vida de nuestros usuarios.",
                icon: "🎯",
              },
              {
                title: "Visión",
                desc: "Ser la empresa líder de tecnología en Centroamérica, impulsando innovación con impacto real.",
                icon: "🔭",
              },
              {
                title: "Valores",
                desc: "Innovación, transparencia, compromiso con nuestros usuarios y excelencia en cada producto.",
                icon: "💎",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-card text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-ink-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section
        id="productos"
        className="py-20 bg-gradient-to-br from-brand-50 via-white to-brand-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nuestros <span className="text-brand-600">Productos</span>
          </h2>
          <p className="text-center text-ink-600 max-w-2xl mx-auto mb-12">
            Plataformas diseñadas para resolver necesidades reales.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Movera */}
            <div className="bg-white rounded-xl p-8 shadow-card border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Movera</h3>
              <p className="text-ink-600 mb-6">
                Plataforma de movilidad y transporte. Conectamos personas con
                soluciones de transporte eficientes y seguras.
              </p>
              <a
                href="https://movera-hn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-semibold text-sm hover:underline"
              >
                Visitar movera-hn.com →
              </a>
            </div>

            {/* Mimar */}
            <div className="bg-white rounded-xl p-8 shadow-card border border-gray-100">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Mimar</h3>
              <p className="text-ink-600 mb-6">
                Plataforma de servicios y cuidado personal. Conectamos
                profesionales con personas que buscan bienestar.
              </p>
              <span className="text-ink-400 font-semibold text-sm">
                Próximamente
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-brand-600">Contacto</span>
          </h2>
          <p className="text-ink-600 mb-8">
            ¿Tienes preguntas o quieres saber más sobre nuestras soluciones?
            Escríbenos.
          </p>
          <a
            href="mailto:info@averatechnologies.com"
            className="inline-block px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition"
          >
            Escríbenos
          </a>
        </div>
      </section>
    </>
  );
}
