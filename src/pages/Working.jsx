import React from 'react';
import { useNavigate } from 'react-router-dom';

const Working = () => {
  // Hook de react-router-dom para navegar en el historial
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0d1117] pt-[120px] pb-20 relative overflow-hidden flex flex-col items-center justify-center font-sans text-on-surface">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-3xl px-6 relative z-10 text-center">
        
        {/* Contenedor Principal estilo Terminal/Card */}
        <div className="bg-[#161b22] border border-cyan-900/50 rounded-2xl p-8 md:p-14 shadow-[0_0_40px_rgba(0,240,255,0.1)] flex flex-col items-center">
          
          {/* Engranaje animado simulando trabajo en proceso */}
          <span className="material-symbols-outlined text-[6rem] md:text-[8rem] text-cyan-400 mb-6 animate-[spin_4s_linear_infinite] drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">
            settings
          </span>
          
          <h2 className="text-cyan-400 text-xl md:text-2xl font-bold tracking-widest mb-6 uppercase">
            SISTEMA EN MANTENIMIENTO
          </h2>
          
          <p className="text-zinc-400 mb-10 leading-relaxed max-w-xl text-sm md:text-base">
            El núcleo de ingeniería está trabajando actualmente en este sector. 
            Muy pronto esta sección estará disponible con nuevas funcionalidades y mejoras de rendimiento.
          </p>
         
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            {/* Botón de regreso que usa la función navigate(-1) para volver a la pestaña anterior */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 bg-cyan-400/10 border border-cyan-400 text-cyan-400 px-6 py-3 rounded font-bold uppercase hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Volver a la pestaña anterior
            </button>
          </div>
          
          <div className="mt-12 pt-6 border-t border-zinc-800/50 w-full">
            <code className="text-zinc-600 text-xs font-mono">
              Status: UNDER_CONSTRUCTION | Source: Niklan_Engineering
            </code>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Working;
