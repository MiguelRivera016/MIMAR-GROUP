import Link from "next/link";

export default function HeroCorporate(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-group-700 to-group-500" />
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(60%_55%_at_20%_30%,black,transparent)]">
        <div className="h-full w-full bg-white/10" />
      </div>

      <div className="relative z-10 container-pro section-pad">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-white">
            <p className="text-[12px] uppercase tracking-wider text-white/80">Grupo Corporativo</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Innovación que impulsa negocios
            </h1>
            <p className="mt-4 max-w-xl text-white/90">
              En MIMAR GROUP unimos tecnología y visión empresarial para construir soluciones de alto impacto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/empresas" className="btn-primary">Empresas del grupo</Link> {/* ← antes /divisiones */}
              <Link href="/contacto" className="btn-ghost">Contacto corporativo</Link>
            </div>
          </div>

          <div>
            <div className="rounded-xl2 bg-white/95 p-4 shadow-card ring-1 ring-black/10">
              <div className="mb-3 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
                <img src="/assets/images/og-corporativo.png" alt="Visión corporativa" className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
