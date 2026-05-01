import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// --- CONFIGURACIÓN DE SUPABASE ---
const SUPABASE_URL = 'https://hboedjqvqzjvtikhlhoy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhib2VkanF2cXpqdnRpa2hsaG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MDQ3MzksImV4cCI6MjA4MjM4MDczOX0.PAuLPANTSE2Wu1wly3bQkOvAp98H7wrGz7_cTye2Vwo';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Profile = () => {
  const navigate = useNavigate();
  
  // Estados de la vista
  const [session, setSession] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Estado para el botón de descarga
  const [downloadStatus, setDownloadStatus] = useState({ state: 'idle', timeLeft: 0 });

  useEffect(() => {
    const fetchProfileData = async () => {
      // 1. Verificar Sesión
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Si alguien intenta entrar a /profile sin estar logueado, lo mandamos al inicio
        navigate('/');
        return;
      }
      
      setSession(session);

      // 2. Cargar Compras del Usuario
      const { data, error } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setPurchases(data);
      }
      
      setIsLoading(false);
    };

    fetchProfileData();
  }, [navigate]);

  // --- FUNCIÓN DE DESCARGA SEGURA (EDGE FUNCTION) ---
  const handleDownload = async () => {
    if (downloadStatus.state === 'loading' || downloadStatus.state === 'timer') return;
    
    setDownloadStatus({ state: 'loading', timeLeft: 0 });

    try {
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      if (!currentSession) {
        alert("Tu sesión expiró. Por favor inicia sesión nuevamente.");
        navigate('/');
        return;
      }

      // Llamada a tu Edge Function real
      const { data, error } = await supabase.functions.invoke('generar-link-r2', {
        body: { filename: 'deus_corruptus_premium.zip' }
      });

      if (error || !data?.signedUrl) {
        throw new Error("Acceso Denegado o Error del Servidor");
      }

      // Redirigir a la descarga segura
      window.location.href = data.signedUrl;

      // Iniciar el temporizador visual de 60 segundos
      setDownloadStatus({ state: 'timer', timeLeft: 60 });
      
      let timeLeft = 60;
      const timerInterval = setInterval(() => {
        timeLeft -= 1;
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          setDownloadStatus({ state: 'idle', timeLeft: 0 });
        } else {
          setDownloadStatus({ state: 'timer', timeLeft });
        }
      }, 1000);

    } catch (err) {
      console.error("Error de Descarga:", err);
      setDownloadStatus({ state: 'error', timeLeft: 0 });
      
      // Restaurar el botón después de 3 segundos
      setTimeout(() => {
        setDownloadStatus({ state: 'idle', timeLeft: 0 });
      }, 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="flex flex-col items-center">
           {/* Spinner Estilo Terminal */}
           <div className="w-12 h-12 border-4 border-transparent border-t-green-500 rounded-full animate-spin mb-4"></div>
           <p className="text-green-500 font-mono tracking-widest animate-pulse">CARGANDO DATOS CLASIFICADOS...</p>
        </div>
      </div>
    );
  }

  // Obtenemos el nombre del usuario
  const userName = session?.user?.user_metadata?.full_name || "Ingeniero";

  return (
    <div className="min-h-screen bg-[#0d1117] pt-[120px] pb-20 relative overflow-hidden flex flex-col items-center font-sans text-on-surface">
      {/* Fondo tecnológico sutil */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-5xl px-6 relative z-10">
        
        {/* --- HEADER DEL PERFIL --- */}
        <div className="text-center border-b border-zinc-800 pb-10 mb-10">
          <h1 className="font-h1 text-4xl md:text-5xl text-green-500 mb-2 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            BIENVENIDO, {userName}
          </h1>
          <p className="text-zinc-500 font-mono text-sm tracking-widest">
            PROTOCOLO DE ACCESO ACTIVO PARA: <span className="text-white">{session?.user?.email}</span>
          </p>
        </div>

        {/* --- REJILLA DE COMPRAS --- */}
        {purchases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {purchases.map((item) => {
              if (item.product_id === 'deus_corruptus_premium') {
                return (
                  <div key={item.id} className="bg-[#161b22] border border-green-500/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:-translate-y-1 transition-all duration-300">
                    
                    {/* Badge Superior */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded border border-green-500/30">
                        ACCESO ACTIVO
                      </span>
                      <span className="material-symbols-outlined text-green-500">lock_open</span>
                    </div>

                    <h3 className="text-xl text-white font-bold mb-1">Deus Corruptus Premium</h3>
                    <p className="text-zinc-500 text-sm mb-6 font-mono">Pack de Ingeniería Visual (327 MB)</p>
                    
                    {/* Botón Dinámico de Descarga */}
                    <button 
                      onClick={handleDownload}
                      disabled={downloadStatus.state !== 'idle'}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded font-bold tracking-widest uppercase transition-all duration-300 ${
                        downloadStatus.state === 'loading' 
                          ? 'bg-zinc-800 text-green-500 border border-green-500/50 opacity-80 cursor-wait'
                        : downloadStatus.state === 'timer'
                          ? 'bg-transparent border border-yellow-500 text-yellow-500 animate-pulse cursor-not-allowed'
                        : downloadStatus.state === 'error'
                          ? 'bg-red-500/10 border border-red-500 text-red-500'
                        : 'bg-green-500/10 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                      }`}
                    >
                      {downloadStatus.state === 'loading' && <div className="w-4 h-4 border-2 border-transparent border-t-green-500 rounded-full animate-spin"></div>}
                      {downloadStatus.state === 'loading' && <span>Autenticando...</span>}
                      
                      {downloadStatus.state === 'timer' && <span className="material-symbols-outlined">hourglass_top</span>}
                      {downloadStatus.state === 'timer' && <span>Link Activo: {downloadStatus.timeLeft}s</span>}
                      
                      {downloadStatus.state === 'error' && <span className="material-symbols-outlined">error</span>}
                      {downloadStatus.state === 'error' && <span>Error Servidor</span>}
                      
                      {downloadStatus.state === 'idle' && <span className="material-symbols-outlined">cloud_download</span>}
                      {downloadStatus.state === 'idle' && <span>Descargar Link</span>}
                    </button>
                    
                    <div className="text-center mt-3">
                      <p className="text-zinc-600 text-xs font-mono flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">timer</span>
                        Enlace temporal de 60 segundos
                      </p>
                    </div>

                  </div>
                );
              }
              return null; // Si hubiera otros productos, se manejarían aquí
            })}
            
          </div>
        ) : (
          /* --- ESTADO: SIN COMPRAS --- */
          <div className="text-center py-20 bg-[#161b22] border border-zinc-800 rounded-xl mt-8">
            <span className="material-symbols-outlined text-zinc-700 text-[80px] mb-4">folder_off</span>
            <p className="text-zinc-400 text-lg mb-8">No se detectaron protocolos de compra activos.</p>
            <Link 
              to="/arts" 
              className="inline-flex items-center gap-2 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-6 py-3 rounded font-bold tracking-widest uppercase transition-all duration-300"
            >
              Explorar Galería
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;