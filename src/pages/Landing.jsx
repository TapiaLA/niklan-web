import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'


const Landing = () => {
// Lógica de EmailJS
  const form = useRef();
  const [status, setStatus] = useState("Enviar Mensaje");

// --- NUEVA LÓGICA DE LA CONSOLA ---
  const consoleContainerRef = useRef(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Amplié un poco la lista para que el bucle infinito se vea más natural
    const mensajesSimulados = [
      { text: "root@itess-node:~# ./start_meowl.sh", color: "text-primary-fixed" },
      { text: "[INFO] Inicializando núcleos de red neuronal...", color: "text-zinc-400" },
      { text: "[OK] Conectando módulos de inteligencia...", color: "text-tertiary-container" },
      { text: "[Meowl] Escuchando puerto 3000...", color: "text-zinc-400" },
      { text: "[WARN] Intento de conexión no autorizada bloqueado.", color: "text-error" },
      { text: "[Xio] Sincronizando base de datos...", color: "text-zinc-400" },
      { text: "[OK] Sistemas 100% operativos.", color: "text-tertiary-container" },
      { text: "root@itess-node:~# pm2 flush", color: "text-primary-fixed" },
      { text: "[INFO] Vaciando registros antiguos...", color: "text-zinc-400" },
      { text: "[OK] Memoria caché liberada.", color: "text-tertiary-container" }
    ];

    // Iniciamos con las dos primeras líneas siempre
    setLogs([mensajesSimulados[0], mensajesSimulados[1]]);
    let index = 2;

    const interval = setInterval(() => {
      setLogs((prevLogs) => {
        // El operador % hace que si index es 10, regrese al índice 0 mágicamente
        const nuevoMensaje = mensajesSimulados[index % mensajesSimulados.length];
        
        // Sumamos el nuevo mensaje y mantenemos solo los últimos 15
        return [...prevLogs, nuevoMensaje].slice(-15);
      });
      index++;
    }, 2000);

    // Limpieza estricta para evitar duplicados
    return () => clearInterval(interval);
  }, []);

// Efecto para hacer auto-scroll SOLO en la consola
  useEffect(() => {
    const timer = setTimeout(() => {
      if (consoleContainerRef.current) {
        consoleContainerRef.current.scrollTo({
          top: consoleContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [logs]);
  // --- FIN LÓGICA DE LA CONSOLA ---


  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    // Aquí están tus llaves reales rescatadas de tu código anterior
    emailjs.sendForm('service_y0mfrer', 'template_eisdvui', form.current, '-3vTsvPyg7FTWU1km')
      .then((result) => {
          setStatus("¡Mensaje Enviado con Éxito!");
          form.current.reset();
          // Regresa el botón a su estado normal después de 3 segundos
          setTimeout(() => setStatus("Enviar Mensaje"), 3000);
      }, (error) => {
          setStatus("Error al enviar");
          console.log(error.text);
      });
  };

  return (
    <>
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="relative pt-xl pb-xl px-grid-margin bg-grid flex items-center justify-center min-h-[614px] border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dim/80 to-surface-dim z-0"></div>
          <div className="relative z-10 max-w-[1440px] mx-auto text-center flex flex-col items-center gap-md">
            <span className="font-label-caps text-on-surface-variant uppercase tracking-widest opacity-80">Niklan Web Ecosystem</span>
            <h1 className="font-h1 text-h1 text-on-surface max-w-3xl leading-tight">Donde el Código Encuentra el Hardware</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-sm">
              Ingeniería en desarrollo de bots impulsados por IA y soluciones precisas de mantenimiento para equipos de alto rendimiento en Salvatierra.
            </p>
            <div className="flex gap-md mt-lg">
              <Link to="/sandbox" className="bg-secondary-container text-white px-8 py-3 rounded font-label-caps uppercase transition-all duration-300 ease-out hover:bg-on-secondary-fixed hover:-translate-y-1 hover:scale-105 hover:glow-cyan inline-block">
                Explorar Software
              </Link>
              <a href="#hardware" className="bg-transparent border border-outline text-on-surface px-8 py-3 rounded font-label-caps uppercase transition-all duration-300 ease-out hover:border-tertiary-container hover:text-tertiary-container hover:-translate-y-1 hover:scale-105 hover:glow-copper inline-block">
                Servicios Técnicos
              </a>
            </div>
          </div>
        </section>

        {/* Two-Column Layout (Software vs Hardware) */}
        <section className="py-xl px-grid-margin max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
            
            {/* Column 1: Software & AI */}
            <div id="software" className="flex flex-col gap-grid-gutter scroll-mt-24">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary-fixed">terminal</span>
                <h2 className="font-h2 text-h2 text-on-surface">Software & AI</h2>
              </div>
              
              <div className="bg-surface-container-low border border-white/10 rounded-lg p-grid-gutter hover:border-primary-fixed/30 hover:glow-cyan relative overflow-hidden transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-fixed to-transparent opacity-30 group-hover:opacity-70"></div>
                <div className="flex justify-between items-start mb-sm">
                  <h3 className="font-h3 text-h3 text-on-surface">Ecosistema Meowl & Xio</h3>
                  <span className="bg-primary-fixed/10 text-primary-fixed font-label-caps px-2 py-1 rounded border border-primary-fixed/20 text-xs">Node.js</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md opacity-90">
                  Bots de IA modulares diseñados para automatización de tareas y resolución de problemas complejos.
                </p>
              </div>

              <div className="bg-surface-container-low border border-white/10 rounded-lg p-grid-gutter hover:border-primary-fixed/30 hover:glow-cyan relative overflow-hidden transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-fixed to-transparent opacity-30 group-hover:opacity-70"></div>
                <div className="flex justify-between items-start mb-sm">
                  <h3 className="font-h3 text-h3 text-on-surface">Arquitectura Linux</h3>
                  <span className="bg-primary-fixed/10 text-primary-fixed font-label-caps px-2 py-1 rounded border border-primary-fixed/20 text-xs">Activo</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md opacity-90">
                  Despliegues robustos usando PM2 en entornos Linux para garantizar un tiempo de actividad continuo de los servicios.
                </p>
              </div>

             {/* Terminal Simulator (Ahora Dinámico y Corregido) */}
              <div className="bg-surface-container-lowest border border-zinc-800 rounded-lg p-sm font-mono text-xs text-on-surface-variant overflow-hidden mt-auto shadow-inner h-[180px] flex flex-col relative">
                
                {/* Botones de ventana (shrink-0 asegura que nunca se aplasten) */}
                <div className="flex gap-2 mb-2 border-b border-zinc-800 pb-2 sticky top-0 bg-surface-container-lowest z-10 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
                  <span className="ml-auto text-[10px] text-zinc-600 opacity-70">Meowl_Console // Live</span>
                </div>

                {/* Área de Logs con scroll */}
                <div 
                  ref={consoleContainerRef}
                  className="flex flex-col gap-1 overflow-y-auto overflow-x-auto flex-grow pb-2 scroll-smooth"
                >
                  {logs.map((log, index) => (
                    <code key={index} className={`whitespace-nowrap ${log.color}`}>
                      {log.text}
                    </code>
                  ))}
                </div>
              </div>
            </div> {/* Cierre de la columna 1 (Software & AI) */}

            {/* Column 2: Hardware Services */}
            <div id="hardware" className="flex flex-col gap-grid-gutter scroll-mt-24">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-tertiary-container">memory</span>
                <h2 className="font-h2 text-h2 text-on-surface">Servicios de Hardware</h2>
              </div>
              
              <div className="bg-surface-container-low border border-white/10 rounded-lg p-grid-gutter hover:border-tertiary-container/30 hover:glow-copper relative overflow-hidden transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary-container to-transparent opacity-30 group-hover:opacity-70"></div>
                <div className="flex justify-between items-start mb-sm">
                  <h3 className="font-h3 text-h3 text-on-surface">Mantenimiento de Laptops</h3>
                  <span className="bg-zinc-800 text-on-surface font-label-caps px-2 py-1 rounded border border-zinc-700 text-xs">Salvatierra</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md opacity-90">
                  Limpieza profunda, cambio de pasta térmica de alto rendimiento y diagnósticos avanzados para estaciones de trabajo.
                </p>
              </div>

              <div className="bg-surface-container-low border border-white/10 rounded-lg p-grid-gutter hover:border-tertiary-container/30 hover:glow-copper relative overflow-hidden transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary-container to-transparent opacity-30 group-hover:opacity-70"></div>
                <div className="flex justify-between items-start mb-sm">
                  <h3 className="font-h3 text-h3 text-on-surface">Reparación de Móviles</h3>
                  <span className="bg-zinc-800 text-on-surface font-label-caps px-2 py-1 rounded border border-zinc-700 text-xs">Local</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md opacity-90">
                  Sustitución de baterías, cambios de sistema operativo y solución a problemas críticos de hardware en smartphones.
                </p>
              </div>

              {/* Stats Placeholder */}
              <div className="bg-surface-container-lowest border border-zinc-800 rounded-lg p-grid-gutter flex items-center justify-center min-h-[150px] relative mt-auto overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="w-1 h-8 bg-tertiary-container"></div>
                  <div className="w-1 h-12 bg-tertiary-container"></div>
                  <div className="w-1 h-6 bg-tertiary-container"></div>
                  <div className="w-1 h-16 bg-tertiary-container"></div>
                  <div className="w-1 h-10 bg-tertiary-container"></div>
                  <div className="w-1 h-14 bg-tertiary-container"></div>
                  <div className="w-1 h-20 bg-tertiary-container"></div>
                  <div className="w-1 h-8 bg-tertiary-container"></div>
                </div>
                <div className="z-10 flex flex-col items-center">
                  <span className="font-h3 text-h3 text-tertiary-container">Especialista TIC</span>
                  <span className="font-label-caps text-on-surface-variant opacity-80 uppercase mt-2">Atención Garantizada</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section REESTILIZADA */}
        <section className="py-xl px-grid-margin bg-surface-container border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-h2 text-h2 text-on-surface mb-md">Contáctanos</h2>
            <p className="font-body-md text-on-surface-variant mb-lg max-w-lg mx-auto opacity-90">
              Inicia una consulta para desarrollo de software o solicita un diagnóstico de hardware.
            </p>
            
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 text-left mt-8">
              <input 
                className="w-full bg-white/5 border-0 border-b-2 border-white/20 text-white px-4 py-3 focus:ring-0 focus:border-primary-fixed focus:bg-white/10 transition-all placeholder:text-zinc-500 outline-none rounded-t-md" 
                placeholder="Nombre completo" type="text" name="user_name" required 
              />
              <input 
                className="w-full bg-white/5 border-0 border-b-2 border-white/20 text-white px-4 py-3 focus:ring-0 focus:border-primary-fixed focus:bg-white/10 transition-all placeholder:text-zinc-500 outline-none rounded-t-md" 
                placeholder="Correo Electrónico" type="email" name="user_email" required 
              />
              <textarea 
                className="w-full bg-white/5 border-0 border-b-2 border-white/20 text-white px-4 py-3 focus:ring-0 focus:border-primary-fixed focus:bg-white/10 transition-all placeholder:text-zinc-500 outline-none resize-none rounded-t-md" 
                placeholder="Describe tu proyecto o problema técnico" name="message" rows="4" required 
              ></textarea>
              
              <button 
                className="mt-4 bg-primary-fixed/10 border border-primary-fixed/50 text-primary-fixed px-8 py-3 rounded font-label-caps uppercase transition-all duration-300 hover:bg-primary-fixed hover:text-surface-dim hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] self-start font-bold tracking-widest" 
                type="submit"
              >
                {status}
              </button>
            </form>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-start gap-8 max-w-[1440px] mx-auto bg-black border-t border-white/10 z-10 relative">
        <div className="flex flex-col gap-xs">
          <div className="text-lg font-black text-white tracking-widest">NIKLAN</div>
          <div className="font-inter text-xs text-zinc-600 opacity-80">© 2026 Niklan. Ingeniería en Software y Hardware.</div>
          <div className="font-inter text-xs text-zinc-600 opacity-80 mt-1">Salvatierra, Guanajuato, México.</div>
        </div>
        <div className="flex gap-md font-inter text-xs pt-2">
          <a className="text-zinc-500 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] transition-colors" href="#">Facebook</a>
          <a className="text-zinc-500 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] transition-colors" href="#">Instagram</a>
          <a className="text-zinc-500 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] transition-colors" href="#">TikTok</a>
          <a className="text-zinc-500 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] transition-colors" href="#">WhatsApp</a>
        </div>
      </footer>
    </>
  )
}

export default Landing