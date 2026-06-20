export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className="text-brand-400">Avera</span>Technologies
            </h3>
            <p className="text-sm text-ink-400">
              Innovación tecnológica al servicio de las personas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-brand-400">
              Productos
            </h4>
            <ul className="space-y-2 text-sm text-ink-400">
              <li>Movera</li>
              <li>Mimar</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-brand-400">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-ink-400">
              <li>info@averatechnologies.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-800 text-center text-xs text-ink-500">
          © {new Date().getFullYear()} Avera Technologies. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
