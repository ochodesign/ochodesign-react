
import React from "react";

const pasos = [
  {
    img: require('../img/proceso-trabajo/teescuchamos.webp'),
    title: "Te escuchamos",
    desc: "Contanos tu idea o necesidad."
  },
  {
    img: require('../img/proceso-trabajo/idea.webp'),
    title: "Proponemos ideas",
    desc: "Te mostramos opciones claras."
  },
  {
    img: require('../img/proceso-trabajo/diseñotuweb.webp'),
    title: "Creamos tu web",
  desc: "Desarrollamos tu sitio a medida, funcional y profesional."
  },
  {
    img: require('../img/proceso-trabajo/impulsatunegocio.webp'),
    title: "Impulsamos tu crecimiento",
    desc: "Te ayudamos a mejorar, crecer y llegar a más clientes."
  }
];


function ProcesoTrabajo() {
  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-[#18181b] via-[#23232a] to-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center font-sans tracking-tight">Nuestro Proceso de Trabajo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pasos.map((paso, idx) => (
            <a
              key={idx}
              href="https://www.ochodesginweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl shadow-2xl p-0 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 relative cursor-pointer no-underline"
              data-aos="fade-up"
            >
              <div className="w-full">
                <img
                  src={paso.img}
                  alt={paso.title}
                  className="rounded-t-2xl shadow-xl object-cover w-full h-[320px]"
                  style={{ background: '#222', objectFit: 'cover', marginTop: 0 }}
                  onError={e => { e.target.src = 'https://via.placeholder.com/520x320?text=Imagen+no+disponible'; }}
                />
              </div>
              <div className="w-full bg-[#243447] flex flex-col items-center justify-center py-8 px-4 rounded-b-2xl">
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight text-center">{paso.title}</h3>
                <p className="text-gray-300 text-lg font-medium text-center">{paso.desc}<br /></p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProcesoTrabajo;
