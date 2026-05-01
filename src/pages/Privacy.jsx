import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-[120px] pb-20 relative overflow-hidden flex flex-col items-center font-sans text-on-surface">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-4xl px-6 md:px-12 relative z-10">
        
        {/* Contenedor Principal estilo Terminal/Card */}
        <div className="bg-[#161b22] border border-zinc-800 rounded-xl p-8 md:p-14 shadow-2xl">
          
          <div className="mb-10 border-b border-zinc-800 pb-8">
            <h1 className="font-h1 text-4xl md:text-5xl text-cyan-400 mb-3 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              Política de Privacidad
            </h1>
            <p className="text-zinc-500 font-mono text-sm tracking-widest">
              ÚLTIMA ACTUALIZACIÓN: 19 DE ENERO DE 2026
            </p>
          </div>

          <div className="space-y-10 text-zinc-300 leading-relaxed">
            
            {/* Sección 1 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">01.</span> Información que Recopilamos
              </h3>
              <p className="mb-3">Para el funcionamiento de Niklan Arts, recopilamos la siguiente información:</p>
              <ul className="list-none space-y-3 pl-2">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm mt-1">arrow_forward_ios</span>
                  <span><strong className="text-white">Identidad:</strong> Correo electrónico y nombre proporcionados a través de Google OAuth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm mt-1">arrow_forward_ios</span>
                  <span><strong className="text-white">Transacciones:</strong> Historial de compras vinculado a tu ID de usuario (no almacenamos datos de tarjetas).</span>
                </li>
              </ul>
            </section>

            {/* Sección 2 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">02.</span> Uso de Proveedores de Terceros
              </h3>
              <p className="mb-3">Utilizamos servicios externos de alta seguridad para procesar tu información:</p>
              <ul className="list-none space-y-3 pl-2">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm mt-1">dns</span>
                  <span><strong className="text-white">Supabase:</strong> Gestiona la autenticación segura y nuestra base de datos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm mt-1">payments</span>
                  <span><strong className="text-white">Stripe:</strong> Procesa todos los pagos de forma externa. Niklan Arts nunca tiene acceso a tus datos bancarios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm mt-1">cloud_sync</span>
                  <span><strong className="text-white">Cloudflare R2:</strong> Se utiliza para el almacenamiento y entrega segura de tus archivos premium mediante enlaces temporales.</span>
                </li>
              </ul>
            </section>

            {/* Sección 3 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">03.</span> Seguridad de los Datos
              </h3>
              <p className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-lg text-sm">
                Tu información se utiliza exclusivamente para validar tu acceso a los productos adquiridos y enviarte actualizaciones sobre tus pedidos. Implementamos medidas de seguridad técnicas para evitar el acceso no autorizado a tu sesión.
              </p>
            </section>

            {/* Sección 4 */}
            <section>
              <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-4 uppercase tracking-wider">
                <span className="text-cyan-400 font-mono text-2xl">04.</span> Derechos del Usuario
              </h3>
              <p>
                Puedes solicitar la eliminación de tu cuenta y datos asociados en cualquier momento contactándonos a través de nuestros canales oficiales de soporte técnico.
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

export default Privacy;