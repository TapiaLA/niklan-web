import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-[120px] pb-20 relative overflow-hidden flex flex-col items-center justify-center font-sans text-on-surface">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-3xl px-6 relative z-10 text-center">
        
        {/* Contenedor Principal estilo Terminal/Card */}
        <div className="bg-[#161b22] border border-red-900/50 rounded-2xl p-8 md:p-14 shadow-[0_0_40px_rgba(220,38,38,0.1)] flex flex-col items-center">
          
          <h1 className="font-h1 text-[6rem] md:text-[8rem] text-red-600 mb-2 leading-none tracking-widest drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            404
          </h1>
          <h2 className="text-red-500 text-xl md:text-2xl font-bold tracking-widest mb-6 uppercase">
            ERROR DE SECTOR: DATOS NO ENCONTRADOS
          </h2>
          
          <p className="text-zinc-400 mb-10 leading-relaxed max-w-xl text-sm md:text-base">
            La ruta que intentas acceder ha sido movida, eliminada o se encuentra en un sector del servidor actualmente corrupto. 
            El núcleo de ingeniería de Niklan no ha podido localizar el recurso solicitado.
          </p>
         
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 bg-red-600/10 border border-red-600 text-red-500 px-6 py-3 rounded font-bold uppercase hover:bg-red-600 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
            >
              <span className="material-symbols-outlined">memory</span>
              Reiniciar Conexión
            </Link>
            <Link 
              to="/arts" 
              className="flex items-center justify-center gap-2 bg-transparent border border-zinc-700 text-zinc-300 px-6 py-3 rounded font-bold uppercase hover:bg-zinc-800 hover:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined">images</span>
              Ir a Galería
            </Link>
          </div>
          
          <div className="mt-12 pt-6 border-t border-zinc-800/50 w-full">
            <code className="text-zinc-600 text-xs font-mono">
              Status: 0x000404 | Source: Niklan_Arts_Engine
            </code>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Error404;
