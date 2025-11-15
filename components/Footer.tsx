import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-white">
      <section className="relative -mt-24 mb-10 bg-gradient-to-r from-group-600 to-group-400 text-white">
        <div className="container-pro py-10">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">Construyamos la siguiente etapa</h2>
              <p className="mt-2 text-white/90">Innovación, disciplina y resultados medibles.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a href="mailto:mimargrouphn@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-group-700 shadow-sm hover:bg-white/95">
                Escríbenos
              </a>
              <a href="https://wa.me/50493870479" className="inline-flex items-center gap-2 rounded-lg bg-black/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-black/20">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-pro grid gap-10 pb-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/branding/logo-group.png"
              alt="MIMAR GROUP"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="text-base font-semibold">MIMAR GROUP</span>
          </div>
          <p className="mt-3 text-sm text-ink-600">
            Empresa corporativa enfocada en soluciones tecnológicas y de negocios.
          </p>
          <p className="mt-2 text-xs text-ink-600">San Pedro Sula, Honduras.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Empresas del grupo</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li><Link href="/empresas#mimar-solutions" className="hover:text-group-600 hover:underline">MIMAR Solutions</Link></li>
            <li><Link href="/empresas#mimarapp" className="hover:text-group-600 hover:underline">MIMARAPP</Link></li>
            <li><Link href="/empresas#real-estate" className="hover:text-group-600 hover:underline">MIMAR Real Estate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Corporativo</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li><Link href="/nosotros" className="hover:text-group-600 hover:underline">Nosotros</Link></li>
            <li><Link href="/proyectos" className="hover:text-group-600 hover:underline">Proyectos & Prensa</Link></li>
            <li><Link href="/contacto" className="hover:text-group-600 hover:underline">Contacto</Link></li>
            <li><Link href="/privacidad" className="hover:text-group-600 hover:underline">Privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li><a href="mailto:mimargrouphn@gmail.com" className="hover:text-group-600 hover:underline">mimargrouphn@gmail.com</a></li>
            <li><a href="tel:+50493870479" className="hover:text-group-600 hover:underline">+504 9387-0479</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-pro flex flex-col items-center justify-between gap-3 py-4 text-xs text-ink-600 md:flex-row">
          <p>© {new Date().getFullYear()} MIMAR GROUP — Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacidad" className="hover:text-group-600 hover:underline">Privacidad</Link>
            <span className="text-slate-300">•</span>
            <Link href="/contacto" className="hover:text-group-600 hover:underline">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
