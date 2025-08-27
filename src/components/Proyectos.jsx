
import React from "react";
import camiluImg from '../img/img-proyectos-mockup-react/camilu-dk.webp';
import jamonymigaImg from '../img/img-proyectos-mockup-react/jamonymiga-dk.webp';
import kioscosImg from '../img/img-proyectos-mockup-react/kioscos-dk.webp';
import portafolioImg from '../img/img-proyectos-mockup-react/portafoliopersonal-dk.webp';

import futsorteoImg from '../img/img-proyectos-mockup-react/futsorteo-dk.webp';
import invitacionDigitalImg from '../img/invitacion-digital-section/image-1.webp';

const proyectosData = [
  {
    id: 1,
    titulo: "Camilu",
    descripcion: "Sitio web profesional para peluquería, con servicios, turnos online y contacto.",
    imagen: camiluImg,
  tecnologias: ["Figma", "HTML", "CSS", "JS"],
    url: "https://www.camilupeluqueria.com/",
  },
  {
    id: 2,
    titulo: "Jamón y Miga",
    descripcion: "Sitio web para panadería de barrio, con menú digital y contacto.",
    imagen: jamonymigaImg,
  tecnologias: ["Figma", "HTML", "CSS", "JS"],
    url: "https://www.jamonymiga.com/",
  },
  {
    id: 3,
    titulo: "Kioscos",
    descripcion: "Sitio web para cadena de kioscos, integración con ubicación en Maps, contacto y marcas asociadas.",
    imagen: kioscosImg,
  tecnologias: ["Figma", "HTML", "CSS", "JS"],
    url: "https://laparadadelsol-despen24.com/",
  },
  {
    id: 4,
    titulo: "Portafolio Personal",
    descripcion: "Sitio web personal para mostrar trabajos y contacto.",
    imagen: portafolioImg,
  tecnologias: ["Figma", "HTML", "CSS", "JS"],
    url: "https://ochodesign.github.io/portafoliolucas8a/",
  },
  {
    id: 5,
    titulo: "Futsorteo",
    descripcion: "Un sitio para apasionados del fútbol 5. Podés anotar a los jugadores, elegir arqueros, ver info de la cancha y organizar todo desde una web fácil y rápida.",
    imagen: futsorteoImg,
  tecnologias: ["Figma", "HTML", "CSS", "JS"],
    url: "https://ochodesign.github.io/futsorteo/",
  },
  {
    id: 6,
    titulo: "Invitación Digital",
    descripcion: "Invitación digital interactiva y personalizada para eventos. Permite confirmar asistencia, ver ubicación, galería de imágenes y mucho más, todo desde el celular.",
    imagen: invitacionDigitalImg,
    tecnologias: ["Figma", "HTML", "CSS", "JS", "PHP", "MySQL"],
    url: "https://lightblue-bat-128924.hostingersite.com/",
  },
];


const Proyectos = () => {
  return (
  <section id="proyectos" className="w-full py-12 px-4 bg-gradient-to-br from-[#18181b] via-[#23232a] to-[#0d0d0d] min-h-[80vh]" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center font-sans tracking-tight">
          Nuestros Proyectos
        </h2>
        <p className="text-gray-300 text-base text-center mb-8 max-w-3xl mx-auto">
          Descubre algunos de los sitios web y proyectos desarrollados por Ocho Design para clientes de diferentes rubros. Cada proyecto está pensado para potenciar la presencia digital, mejorar la experiencia de usuario y lograr resultados profesionales.<br />¡Conoce nuestro trabajo en diseño web, desarrollo y branding!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {proyectosData.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
            >
              <div className="relative group">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-700/20 text-cyan-400 text-xs px-2 py-1 rounded-full font-mono border border-cyan-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-cyan-400 hover:text-cyan-300 underline font-semibold text-sm text-center transition-colors"
                >
                  Visitar sitio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;