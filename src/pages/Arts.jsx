import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Arts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-[#0d1117] pt-[100px] relative overflow-hidden flex flex-col">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-4 md:px-8 w-full">

        {/* Encabezado Galería */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="font-h1 text-4xl md:text-5xl text-white mb-4 tracking-wider drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Niklan Arts Gallery
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Repositorio de ingeniería visual para ecosistemas digitales
          </p>
        </div>

        {/* Tarjeta de Deus Corruptus */}
        <div className="bg-[#161b22] border border-zinc-800 rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl hover:border-green-500/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-7 flex justify-center lg:justify-start items-center">
              {/* Contenedor más pequeño (max-w-[450px]) para que no ocupe toda la pantalla */}
              <div className="flex gap-1 md:gap-[4px] bg-black p-2 md:p-3 rounded-xl border border-zinc-800 shadow-2xl w-full max-w-[450px]">
                
                {/* GIF Principal (Proporción exacta 5.06 respecto al lateral) */}
                <div style={{ flex: 5.06 }} className="flex flex-col">
                  <img
                    src="public/deus_corruptus_506.gif"
                    alt="Deus Corruptus Main"
                    className="w-full h-full object-cover rounded-l cursor-zoom-in hover:scale-[1.01] transition-transform duration-300 shadow-lg border border-zinc-800/80"
                    onClick={() => setSelectedImage('public/deus_corruptus_506.gif')}
                  />
                </div>
                
                {/* GIF Lateral (Proporción exacta 1, ahora visible siempre) */}
                <div style={{ flex: 1 }} className="flex flex-col">
                  <img
                    src="public/deus_corruptus_100.gif"
                    alt="Deus Corruptus Side"
                    className="w-full h-full object-cover rounded-r cursor-zoom-in hover:scale-[1.02] transition-transform duration-300 shadow-lg border border-zinc-800/80"
                    onClick={() => setSelectedImage('public/deus_corruptus_100.gif')}
                  />
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="font-h2 text-3xl md:text-4xl text-white mb-4">Deus Corruptus</h2>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed max-w-md">
                Diseño optimizado para perfiles de Steam nivel 10+. Incluye 150 cuadros de animación con efectos de niebla y glitch procedural.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="bg-black/50 text-green-500 font-mono px-3 py-1 rounded border border-zinc-800 text-xs">20 FPS</span>
                <span className="bg-black/50 text-green-500 font-mono px-3 py-1 rounded border border-zinc-800 text-xs">H.264 Source</span>
              </div>

              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    alert("⚙️ SISTEMA EN MANTENIMIENTO ⚙️\n\nPronto estará disponible la adquisición de la versión premium. ¡Estamos trabajando en ello!");
                  }}
                  className="flex items-center justify-center gap-2 bg-green-600/10 border border-green-500 text-green-500 px-6 py-3 rounded font-bold uppercase hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  <span className="material-symbols-outlined">diamond</span>
                  Obtener Versión Premium
                </button>

                <a href="/deus_corruptus_bundle.zip" download className="flex items-center justify-center gap-2 bg-white/5 border border-zinc-700 text-white px-6 py-3 rounded font-bold uppercase hover:bg-white/10 transition-all duration-300">
                  <span className="material-symbols-outlined">download</span>
                  Descargar Free Assets
                </a>

                <a href="https://www.deviantart.com/anletara" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-transparent text-zinc-500 px-6 py-3 rounded uppercase hover:text-white transition-colors text-sm mt-2">
                  <span className="material-symbols-outlined text-sm">brush</span>
                  Ver en DeviantArt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- BASE DE CONOCIMIENTO (FAQ) --- */}
        <section className="mt-32 mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-4xl text-green-500 mb-2 tracking-widest uppercase font-bold">Base de Conocimiento</h2>
            <p className="text-zinc-400">Protocolos de sistema y resolución de dudas</p>
          </div>

          <div className="space-y-2">
            {/* Pregunta 1 */}
            <details className="group border-b border-zinc-800 pb-4 pt-4 cursor-pointer">
              <summary className="flex items-center text-white font-medium list-none">
                <span className="text-green-500 mr-4 font-mono text-xl">₿</span>
                ¿Cómo recibo el producto?
                <span className="ml-auto material-symbols-outlined text-zinc-600 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-zinc-400 text-sm pl-10 leading-relaxed">
                El sistema es automático. Al confirmarse el pago, el botón de compra cambiará a verde y podrás descargar tus archivos inmediatamente desde tu Perfil.
              </p>
            </details>

            {/* Pregunta 2 */}
            <details className="group border-b border-zinc-800 pb-4 pt-4 cursor-pointer">
              <summary className="flex items-center text-white font-medium list-none">
                <span className="text-green-500 mr-4 font-mono text-xl">🎮</span>
                ¿Funciona en Steam?
                <span className="ml-auto material-symbols-outlined text-zinc-600 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-zinc-400 text-sm pl-10 leading-relaxed">
                Afirmativo. Los diseños están renderizados a 506px (Central) y 100px (Lateral) para encajar perfectamente en el expositor de arte de Steam (Nivel 10+ requerido).
              </p>
            </details>

            {/* Pregunta 3 */}
            <details className="group border-b border-zinc-800 pb-4 pt-4 cursor-pointer">
              <summary className="flex items-center text-white font-medium list-none">
                <span className="text-green-500 mr-4 font-mono text-xl">🛡️</span>
                ¿Es seguro el pago?
                <span className="ml-auto material-symbols-outlined text-zinc-600 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-zinc-400 text-sm pl-10 leading-relaxed">
                Usamos Stripe, el estándar mundial de pagos. Nosotros no vemos ni guardamos los datos de tu tarjeta.
              </p>
            </details>
          </div>
        </section>

        {/* --- INICIAR TRANSMISIÓN (CONTACTO) --- */}
        <section className="mt-20 mb-32 border-t border-zinc-800 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Info de contacto */}
            <div className="flex flex-col justify-center">
              <h2 className="font-h2 text-4xl text-red-600 mb-4 tracking-widest uppercase font-bold">Iniciar Transmisión</h2>
              <p className="text-zinc-400 mb-10">Si tienes un proyecto personalizado o encontraste un fallo en la matrix, contáctanos.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-green-500 text-3xl">mail</span>
                  <span className="text-white tracking-wide">cp095300@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <i className="bi bi-discord text-green-500 text-3xl"></i> {/* Requiere Bootstrap Icons o reemplazar por SVG */}
                  <span className="text-white tracking-wide">Soporte Técnico 24/7</span>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-[#161b22] border border-zinc-800 p-8 rounded-xl shadow-lg">
              <form action="https://formspree.io/f/maqqpywy" method="POST" className="flex flex-col gap-6">
                <div>
                  <label className="block text-green-500 font-mono text-xs tracking-widest mb-2 uppercase">Tu Correo</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-[#0d1117] border border-zinc-700 text-white px-4 py-3 rounded focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="usuario@ejemplo.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-green-500 font-mono text-xs tracking-widest mb-2 uppercase">Mensaje de Datos</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full bg-[#0d1117] border border-zinc-700 text-white px-4 py-3 rounded focus:outline-none focus:border-green-500 transition-colors resize-none"
                    placeholder="Escribe aquí..."
                    required
                  ></textarea>
                </div>

                {/* Simulador de Cloudflare (Espacio reservado) */}
                <div className="bg-[#0d1117] border border-zinc-700 p-4 rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500 text-sm">error</span>
                    <span className="text-xs text-zinc-400">Verificación de seguridad requerida</span>
                  </div>
                </div>

                <button type="submit" className="bg-[#21262d] border border-zinc-700 hover:bg-zinc-700 hover:text-white text-zinc-300 px-6 py-3 rounded font-bold tracking-widest transition-all flex items-center justify-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-sm">send</span>
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* --- FOOTER NIKLAN --- */}
      <footer className="bg-[#161b22] border-t border-zinc-800 pt-16 pb-8 w-full z-10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

            <div>
              <h3 className="text-red-600 font-bold tracking-widest mb-6">NIKLAN</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-red-600 text-lg">location_on</span> Lardner, Windhoek, Namibia</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-red-600 text-lg">mail</span> cp095300@gmail.com</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-red-600 text-lg">phone</span> +52 4661124155</li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-600 font-bold tracking-widest mb-6">ENLACES</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Políticas de Privacidad</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Términos de servicio</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-600 font-bold tracking-widest mb-6">SÍGUENOS</h3>
              <div className="flex gap-4">
                {/* Aquí puedes usar iconos reales de react-icons o bootstrap icons */}
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><i className="bi bi-facebook text-xl"></i></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><i className="bi bi-instagram text-xl"></i></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><i className="bi bi-twitter text-xl"></i></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><i className="bi bi-tiktok text-xl"></i></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><i className="bi bi-whatsapp text-xl"></i></a>
              </div>
            </div>

          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-xs">
            © 2026 Niklan. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* --- EL VISOR MODAL --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={closeModal}>
          <div className="relative inline-block border-[3px] border-green-500 rounded-xl shadow-[0_0_40px_rgba(34,197,94,0.6)] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-green-500 hover:text-black transition-colors z-10 flex items-center justify-center backdrop-blur-sm">
              <span className="material-symbols-outlined">close</span>
            </button>
            <img src={selectedImage} alt="Visor" className="max-h-[85vh] max-w-full block rounded-lg object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-green-500 font-mono text-center p-3 border-t border-green-500 text-sm font-bold tracking-widest">
              INSPECCIÓN DE ACTIVO VISUAL_
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Arts;