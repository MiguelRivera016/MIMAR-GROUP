export default function ValuesStrip(){
  const vals=[
    {k:"Misión",v:"Elevar la competitividad de nuestros clientes con soluciones confiables."},
    {k:"Visión",v:"Ser referente regional en innovación aplicada a negocios."},
    {k:"Valores",v:"Disciplina, claridad, calidad y servicio."}
  ];
  return (
  <section className="bg-slate-50/60">
    <div className="container-pro py-10">
      <div className="grid gap-4 md:grid-cols-3">
        {vals.map(x=>(
          <div key={x.k} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-group-700">{x.k}</div>
            <p className="mt-1 text-sm text-ink-700">{x.v}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );}
