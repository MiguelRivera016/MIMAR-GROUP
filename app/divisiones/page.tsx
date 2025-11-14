export default function DivisionesPage(){
  const blocks=[
    {id:"mimar-solutions",t:"MIMAR Solutions",d:"División tecnológica: desarrollo de software, apps, web, nube y soporte.",link:"https://mimarsolutions.lat"},
    {id:"mimarapp",t:"MIMARAPP",d:"Aplicación para contratar servicios. Próximamente: iOS/Android y versión web.",link:"/divisiones#mimarapp"},
    {id:"education",t:"MIMAR Education",d:"Capacitaciones y materiales propios: ‘Informática para Todos’.",link:"/divisiones#education"},
    {id:"real-estate",t:"MIMAR Real Estate",d:"Desarrollo de soluciones inmobiliarias tecnológicas (en planificación).",link:"/divisiones#real-estate"}
  ];
  return (
  <section className="container-pro section-pad">
    <h1 className="text-3xl font-bold text-group-700">Divisiones</h1>
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {blocks.map(b=>(
        <article key={b.id} id={b.id} className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold">{b.t}</h2>
          <p className="mt-1 text-sm text-ink-700">{b.d}</p>
          <a href={b.link} className="mt-4 inline-flex text-sm font-semibold text-group-700 underline">Abrir</a>
        </article>
      ))}
    </div>
  </section>
  );}
