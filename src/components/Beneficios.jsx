
import React from "react";
import { FaGlobe, FaShieldAlt, FaChartLine, FaRocket } from "react-icons/fa";
import Header from "./Header";

const beneficios = [
  {
    icon: <FaGlobe className="w-10 h-10 text-cyan-400" />,
    title: "Presencia Online 24/7",
    desc: "Tu negocio está disponible todo el día, todos los días. Una web te permite captar clientes en cualquier momento y desde cualquier lugar."
  },
  {
    icon: <FaShieldAlt className="w-10 h-10 text-purple-400" />,
    title: "Credibilidad y Confianza",
    desc: "Un sitio web profesional transmite seriedad y confianza, mejorando la percepción de tu marca y facilitando la decisión de compra."
  },
  {
    icon: <FaChartLine className="w-10 h-10 text-green-400" />,
    title: "Aumento de Ventas y Alcance",
    desc: "Expandí tu mercado y llegá a más personas. Una web bien posicionada en Google multiplica tus oportunidades de venta."
  },
  {
    icon: <FaRocket className="w-10 h-10 text-orange-400" />,
    title: "Inversión Accesible y Escalable",
    desc: "Tener tu web es más económico de lo que imaginas y podés escalar funcionalidades a medida que tu negocio crece."
  }
];

export default function Beneficios() {
  return (
    <>
      <Header />
      <section id="beneficios" className="w-full flex flex-col items-center justify-center py-12 px-2 bg-gradient-to-b from-[#101a2b] to-[#162033]" style={{ boxShadow: '0 0 80px 0 #00ffff22' }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 drop-shadow-lg">4 Beneficios de tener tu sitio web hoy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
        {beneficios.map((b, idx) => (
          <div key={idx} className="relative bg-[#181f2a] rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:border-pink-500 border-2 border-transparent overflow-hidden">
            <span className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 z-10 ${idx===0?'bg-cyan-500/20':idx===1?'bg-purple-500/20':idx===2?'bg-green-500/20':'bg-orange-500/20'}`}>
              {b.icon}
            </span>
            <h3 className="text-lg font-bold text-white mb-2 drop-shadow-md z-10">{b.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed z-10">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
