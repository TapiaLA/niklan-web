import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  // Estado para controlar la pantalla de carga (true = cargando, false = éxito)
  const [isLoading, setIsLoading] = useState(true);

  // Simulador de procesamiento (2.5 segundos) igual que en tu Vanilla JS
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer); // Limpieza de seguridad
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] pt-[120px] pb-20 relative overflow-hidden flex flex-col items-center justify-center font-sans text-on-surface">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-2xl px-6 relative z-10 text-center">
        
        {/* Contenedor Principal */}
        <div className="bg-[#161b22] border border-zinc-800 rounded-xl p-8 md:p-14 shadow-[0_0_30px_rgba(0,255,0,0.05)] min-h-[400px] flex flex-col items-center justify-center transition-all duration-500">
          
          {isLoading ? (
            /* --- ESTADO 1: PANTALLA DE CARGA --- */
            <div className="flex flex-col items-center justify-center animate-in fade-in duration-500">
              
              {/* Spinner Cyberpunk (Doble Anillo) */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-8">
                {/* Anillo Verde Exterior (Gira a la derecha) */}
                <div className="absolute inset-0 border-4 border-transparent border-t-green-500 border-r-green-500 rounded-full animate-spin shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
                {/* Anillo Rojo Interior (Gira a la izquierda) */}
                <div className="absolute inset-2 border-4 border-transparent border-t-red-500 border-l-red-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
              </div>

              <p className="font-mono text-green-500 font-bold tracking-widest text-lg mb-2 animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                &gt; CONFIRMANDO TRANSACCIÓN...
              </p>
              <p className="text-zinc-500 font-mono text-sm">
                Registrando licencia en la base de datos...
              </p>
            </div>
          ) : (
            /* --- ESTADO 2: PAGO EXITOSO --- */
            <div className="flex flex-col items-center animate-in zoom-in-95 duration-700 w-full">
              
              {/* Icono de Éxito */}
              <span className="material-symbols-outlined text-green-500 text-[80px] mb-6 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                check_circle
              </span>
              
              <h2 className="font-h2 text-3xl md:text-4xl text-white mb-2">
                ¡Muchas gracias por su compra!
              </h2>
              <p className="text-green-500 font-mono tracking-widest mb-8 text-sm md:text-base">
                [ PROTOCOLO COMPLETADO CON ÉXITO ]
              </p>

              {/* Tarjeta de Acceso Habilitado */}
              <div className="bg-black/60 border border-zinc-800 p-6 rounded-lg mb-10 w-full flex items-center gap-5 text-left shadow-inner">
                <span className="material-symbols-outlined text-green-500 text-4xl">
                  lock_open
                </span>
                <div>
                  <h6 className="text-white font-mono font-bold tracking-widest text-sm mb-1 uppercase">
                    Acceso Habilitado
                  </h6>
                  <p className="text-zinc-400 text-xs md:text-sm m-0 leading-relaxed">
                    Tu archivo ha sido depositado en tu área personal segura. Puedes descargarlo cuando quieras.
                  </p>
                </div>
              </div>
              
              {/* Botón Principal */}
              <Link 
                to="/profile" 
                className="w-full flex items-center justify-center gap-3 bg-green-500/10 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black py-4 px-6 rounded font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] mb-8"
              >
                <span className="material-symbols-outlined">cloud_download</span>
                Ir a mi perfil para descargar
              </Link>

              {/* Regreso */}
              <div className="w-full border-t border-zinc-800 pt-6">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Volver al Inicio
                </Link>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Success;