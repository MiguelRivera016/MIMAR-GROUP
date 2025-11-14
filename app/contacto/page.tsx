"use client";
import { useMemo, useState } from "react";
const EMAIL="mimargrouphn@gmail.com"; const WHATS="50493870479";
export default function Contacto(){
  const [nombre,setNombre]=useState(""); const [correo,setCorreo]=useState(""); const [mensaje,setMensaje]=useState("");
  const valid=useMemo(()=>!!nombre.trim() && /\S+@\S+\.\S+/.test(correo) && !!mensaje.trim(),[nombre,correo,mensaje]);
  const mailto=()=>{ if(!valid) return; const subject=encodeURIComponent("Contacto corporativo — MIMAR GROUP"); const body=encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}`); window.location.href=`mailto:${EMAIL}?subject=${subject}&body=${body}`; };
  const whats=()=>{ if(!valid) return; const text=encodeURIComponent(`Hola MIMAR GROUP,%0A%0A${mensaje}%0A%0ADatos:%0A${nombre}%0A${correo}`); window.open(`https://wa.me/${WHATS}?text=${text}`,"_blank"); };
  return (
  <section className="container-pro section-pad">
    <h1 className="text-3xl font-bold text-group-700">Contacto</h1>
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <form className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200">
        <label className="block text-sm font-medium text-ink-700">Nombre</label>
        <input value={nombre} onChange={e=>setNombre(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-group-300" />
        <label className="mt-4 block text-sm font-medium text-ink-700">Correo</label>
        <input value={correo} onChange={e=>setCorreo(e.target.value)} type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-group-300" />
        <label className="mt-4 block text-sm font-medium text-ink-700">Mensaje</label>
        <textarea value={mensaje} onChange={e=>setMensaje(e.target.value)} rows={6} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-group-300" />
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button type="button" onClick={mailto} disabled={!valid} className="btn-primary">Enviar por correo</button>
          <button type="button" onClick={whats} disabled={!valid} className="btn-ghost">Enviar por WhatsApp</button>
        </div>
      </form>
      <aside className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200">
        <div className="text-sm font-semibold text-ink-700">Oficinas</div>
        <p className="mt-1 text-sm text-ink-700">San Pedro Sula, Honduras</p>
        <div className="mt-4 text-sm"><span className="font-medium">Correo:</span> {EMAIL}</div>
        <div className="mt-1 text-sm"><span className="font-medium">Celular:</span> +504 9387-0479</div>
        <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs text-ink-600">Lunes a viernes — 8:00 am a 6:00 pm</div>
      </aside>
    </div>
  </section>
  );}
