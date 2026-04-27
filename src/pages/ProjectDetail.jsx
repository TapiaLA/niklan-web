import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { proyectos } from '../proyectosData'; // Asegúrate de que la ruta sea correcta

const ProjectDetail = () => {
  const { projectId } = useParams();
  const proyecto = proyectos.find(p => p.id === projectId);

  if (!proyecto) return <div className="text-white pt-32 text-center">Proyecto no encontrado</div>;

  return (
    <div className="min-h-screen bg-surface-dim pt-32 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Lado Izquierdo: Imagen / Visual */}
        <div className="bg-surface-container-low border border-white/10 rounded-2xl aspect-video flex items-center justify-center overflow-hidden glow-cyan/10">
          {proyecto.image ? (
            <img src={proyecto.image} alt={proyecto.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-zinc-700 font-black text-6xl opacity-20">NIKLAN LAB</span>
          )}
        </div>

        {/* Lado Derecho: Detalles */}
        <div className="flex flex-col gap-6">
          <Link to="/sandbox" className="text-primary-fixed text-sm flex items-center gap-2 hover:underline">
            <span className="material-symbols-outlined text-xs">arrow_back</span> Regresar al Sandbox
          </Link>
          <div>
            <span className="bg-primary-fixed/10 text-primary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
              {proyecto.tech}
            </span>
            <h1 className="text-4xl font-black text-white mt-4">{proyecto.title}</h1>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed">{proyecto.desc}</p>
          
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">description</span> Documentación
            </h3>
            <p className="text-zinc-500 text-sm italic">{proyecto.doc}</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {proyecto.demo && (
              <a href={proyecto.demo} target="_blank" rel="noreferrer" className="bg-primary-fixed text-black px-8 py-3 rounded font-bold uppercase hover:scale-105 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">rocket_launch</span> Ejecutar Proyecto
              </a>
            )}
            {proyecto.github && (
              <a href={proyecto.github} target="_blank" rel="noreferrer" className="border border-outline text-white px-8 py-3 rounded font-bold uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-5 invert group-hover:invert-0" alt="" />
                Ver en GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
