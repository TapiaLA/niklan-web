import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-[120px] pb-20 relative overflow-hidden flex flex-col items-center font-sans text-on-surface">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-4xl px-6 md:px-12 relative z-10">
        
        {/* Contenedor Principal estilo Terminal/Card */}
        <div className="bg-[#161b22] border border-zinc-800 rounded-xl p-8 md:p-14 shadow-2xl">
          
          <div className="mb-10 border-b border-zinc-800 pb-8">
            <h1 className="font-h1 text-4xl md:text-5xl text-cyan-400 mb-3 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              Términos de Servicio
            </h1>
            <p className="text-zinc-500 font-mono text-sm tracking-widest">
              ÚLTIMA ACTUALIZACIÓN: 19 DE ENERO DE 2026
            </p>
          </div>

          <div className="space-y-10 text-zinc-300 leading-relaxed">
            
            {/* Sección 1 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">01.</span> Licencia de Uso
              </h3>
              <p className="mb-4">
                Al adquirir el pack "Deus Corruptus Premium" por el precio de <strong className="text-white">$5.00 USD</strong>, Niklan Arts te otorga una licencia de uso personal, no exclusiva y limitada.
              </p>
              <ul className="list-none space-y-4 pl-2 bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                  <span><strong className="text-white">Permitido:</strong> Uso en perfiles personales de Steam, redes sociales y edición personal del archivo PSD.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-xl">cancel</span>
                  <span><strong className="text-white">Prohibido:</strong> La reventa, redistribución o sublicencia de cualquier archivo contenido en el ZIP (PSD, videos 4K o secuencias de imágenes).</span>
                </li>
              </ul>
            </section>

            {/* Sección 2 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">02.</span> Entrega de Contenido Digital
              </h3>
              <p className="mb-3">
                El acceso al contenido se desbloquea tras la verificación del pago a través de Stripe y la autenticación mediante Google OAuth. 
              </p>
              <div className="flex items-start gap-3 bg-red-950/20 border border-red-900/50 p-4 rounded text-sm mt-4">
                <span className="material-symbols-outlined text-red-500">warning</span>
                <p className="text-zinc-300 m-0">
                  Debido a la naturaleza digital de los activos (320 MB de datos descargables), <strong className="text-red-400">no se ofrecen reembolsos</strong> una vez que el enlace de descarga ha sido generado.
                </p>
              </div>
            </section>

            {/* Sección 3 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">03.</span> Propiedad Intelectual
              </h3>
              <p>
                Todos los derechos de autor, marcas comerciales y propiedad intelectual de los diseños pertenecen exclusivamente a <strong className="text-cyan-400">Niklan Arts</strong>. El comprador no adquiere la propiedad del diseño, sino únicamente el derecho a utilizarlo según estos términos.
              </p>
            </section>

            {/* Sección 4 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">04.</span> Limitación de Responsabilidad
              </h3>
              <p>
                Niklan Arts no se hace responsable de problemas técnicos derivados del mal uso de los archivos en plataformas externas (como niveles de Steam insuficientes para el expositor de arte).
              </p>
            </section>

          </div>

          {/* Botón de Regreso */}
          <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-center md:justify-start">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-transparent border border-zinc-700 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 px-6 py-3 rounded font-label-caps uppercase text-sm transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Volver al Inicio
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;