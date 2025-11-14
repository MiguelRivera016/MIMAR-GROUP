export default function Proyectos(){
  const items=[
    {t:"Alianza PyME",d:"Programa de digitalización para comercios minoristas.",kpi:"+30% eficiencia"},
    {t:"Portal ONG",d:"Portal informativo con panel y blog.",kpi:"+20% alcance"},
    {t:"Infra Segura",d:"Backups y monitoreo para continuidad operativa.",kpi:"99.9% uptime"}
  ];
  return (
  <section className="container-pro section-pad">
    <h1 className="text-3xl font-bold text-group-700">Proyectos & Prensa</h1>
    <p className="mt-2 max-w-2xl text-ink-700">Selección de iniciativas y resultados.</p>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {items.map(x=>(
        <article key={x.t} className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200">
          <div className="text-lg font-semibold">{x.t}</div>
          <p className="mt-1 text-sm text-ink-700">{x.d}</p>
          <div className="mt-3 text-xs text-group-700">{x.kpi}</div>
        </article>
      ))}
    </div>
  </section>
  );}
