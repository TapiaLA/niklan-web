import React from 'react';
import { Link } from 'react-router-dom';
import { proyectos } from '../proyectosData';

const Sandbox = () => {
  return (
    <div className="min-h-screen bg-surface-dim pt-32 px-8 pb-20">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-12">
          <Link to="/" className="text-primary-fixed hover:text-white flex items-center gap-2 mb-4 transition-colors w-fit">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Volver al inicio
          </Link>
          <h1 className="font-h1 text-h1 text-white">ITESS Sandbox</h1>
          <p className="text-on-surface-variant max-w-xl mt-4">
            Laboratorio de experimentación técnica: Proyectos académicos, emuladores, hardware y desarrollo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.map((proy) => (
            <Link 
              to={`/sandbox/${proy.id}`} 
              key={proy.id} 
              className="bg-surface-container-low border border-white/10 p-6 rounded-lg hover:border-primary-fixed/50 transition-all group cursor-pointer flex flex-col"
            >
              <span className="text-[10px] font-label-caps text-primary-fixed uppercase tracking-widest">{proy.tech}</span>
              <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary-fixed transition-colors">{proy.title}</h3>
              <p className="text-on-surface-variant text-sm mt-3 flex-grow">{proy.desc}</p>
              
              <div className="mt-6 flex items-center gap-2 text-xs text-white opacity-50 group-hover:opacity-100 transition-opacity">
                VER DETALLES <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sandbox;