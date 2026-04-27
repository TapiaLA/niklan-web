import React from 'react';
import { Link } from 'react-router-dom';

const Arts = () => {
  return (
    <div className="min-h-screen bg-surface-dim flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-lg text-center bg-surface-container-low p-12 rounded-2xl border border-white/10 glow-cyan">
        
        {/* Indicador de Mantenimiento con Animación Pulse */}
        <div className="inline-flex items-center gap-2 bg-primary-fixed/10 border border-primary-fixed/30 text-primary-fixed px-4 py-1.5 rounded-full text-xs font-label-caps tracking-widest mb-6 animate-pulse">
          <span className="material-symbols-outlined text-sm">build</span>
          SISTEMA EN ACTUALIZACIÓN
        </div>
        
        <h1 className="font-h1 text-4xl text-white mb-4">Niklan Arts</h1>
        
        <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
          Bienvenido desde DeviantArt. Estamos migrando nuestra galería visual a una nueva arquitectura web. <br/><br/>
          <strong className="text-white">Tus archivos están a salvo. Puedes seguir descargando tus Free Assets sin interrupciones mientras terminamos.</strong>
        </p>

        {/* BOTÓN DE DESCARGA DIRECTA */}
        
        <a 
             href="/deus_corruptus_bundle.zip"  
          download
          className="inline-flex items-center gap-2 bg-primary-fixed text-black px-8 py-4 rounded font-bold uppercase hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300 w-full justify-center"
        >
          <span className="material-symbols-outlined">download</span>
          Descargar Free Assets
        </a>

        <Link to="/" className="inline-block mt-8 text-zinc-500 hover:text-cyan-400 transition-colors text-sm">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Arts;