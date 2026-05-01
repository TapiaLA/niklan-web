import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// --- CONFIGURACIÓN DE SUPABASE ---
const SUPABASE_URL = 'https://hboedjqvqzjvtikhlhoy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhib2VkanF2cXpqdnRpa2hsaG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MDQ3MzksImV4cCI6MjA4MjM4MDczOX0.PAuLPANTSE2Wu1wly3bQkOvAp98H7wrGz7_cTye2Vwo';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Navbar = () => {
  const [session, setSession] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // --- LÓGICA DINÁMICA DE RUTAS ---
  const location = useLocation();
  const isHome = location.pathname === '/';

  // --- LÓGICA DE SESIÓN ---
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    const cleanRedirect = window.location.origin + window.location.pathname;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: cleanRedirect, queryParams: { prompt: 'select_account' } }
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    sessionStorage.clear();
    setIsProfileOpen(false);
  };

  return (
    <nav className="bg-zinc-950/80 backdrop-blur-md fixed top-0 w-full flex justify-between items-center px-4 md:px-8 py-4 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 border-b border-white/10">
      
      {/* --- LOGO GLITCH NIKLAN --- */}
      <Link to="/" className="flex items-center gap-3 group">
        <img src="/niklanlogo.png" alt="Logo Niklan" className="h-10 md:h-12 w-auto object-contain group-hover:rotate-6 transition-transform duration-300" />
        <div className="text-lg md:text-xl font-bold tracking-widest text-white uppercase relative overflow-hidden">
          <span className="relative z-10">Niklan</span>
          <span className="absolute inset-0 text-cyan-400 group-hover:animate-glitch-1 opacity-0 group-hover:opacity-100 transition-opacity">Niklan</span>
          <span className="absolute inset-0 text-error group-hover:animate-glitch-2 opacity-0 group-hover:opacity-100 transition-opacity">Niklan</span>
        </div>
      </Link>
      
      {/* --- MENÚ ESCRITORIO --- */}
      <div className="hidden lg:flex gap-8 items-center font-inter text-sm tracking-tighter uppercase font-medium">
        {/* Enlaces Dinámicos */}
        <a href={isHome ? "#software" : "/#software"} className="text-zinc-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all scale-95 hover:scale-105 active:scale-95">Software</a>
        <a href={isHome ? "#hardware" : "/#hardware"} className="text-zinc-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all scale-95 hover:scale-105 active:scale-95">Hardware</a>
        
        {/* Rutas React */}
        <Link to="/sandbox" className="text-zinc-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all scale-95 hover:scale-105 active:scale-95">Proyectos ITESS</Link>
        <Link to="/arts" className="text-zinc-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all scale-95 hover:scale-105 active:scale-95">Galería</Link>

        {/* --- ZONA AUTENTICACIÓN --- */}
        <div className="ml-4 border-l border-white/10 pl-4 relative flex items-center gap-4">
          <Link to="/working" className="inline-flex items-center justify-center bg-secondary-container text-white px-6 py-2 rounded font-label-caps uppercase hover:bg-on-secondary-fixed hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
            Contacto
          </Link>

          {session ? (
            <div className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 focus:outline-none">
                {session.user.user_metadata.avatar_url ? (
                  <img src={session.user.user_metadata.avatar_url} alt="Avatar" className="w-9 h-9 rounded-full border border-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.3)]" />
                ) : (
                  <span className="material-symbols-outlined text-cyan-400 text-3xl">account_circle</span>
                )}
                <span className="material-symbols-outlined text-zinc-500 text-sm">expand_more</span>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-zinc-900 border border-white/10 rounded shadow-xl py-2">
                  <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-cyan-400 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">memory</span> Adquisiciones
                  </Link>
                  <div className="border-t border-white/5 my-2"></div>
                  <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2 text-sm text-error hover:bg-zinc-800 w-full text-left transition-colors">
                    <span className="material-symbols-outlined text-[18px]">logout</span> Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/working" className="flex items-center gap-2 text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded font-label-caps uppercase text-xs hover:bg-cyan-400 hover:text-black transition-all">
              <span className="material-symbols-outlined text-[18px]">login</span> Entrar
            </Link>
          )}
        </div>
      </div>

      {/* Botón Móvil */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-cyan-400 p-2">
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-b border-white/10 lg:hidden">
          <div className="flex flex-col px-6 py-6 space-y-4">
            <a href={isHome ? "#software" : "/#software"} onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-cyan-400 font-label-caps uppercase border-b border-white/5 pb-2">Software</a>
            <a href={isHome ? "#hardware" : "/#hardware"} onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-cyan-400 font-label-caps uppercase border-b border-white/5 pb-2">Hardware</a>
            <Link to="/sandbox" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-cyan-400 font-label-caps uppercase border-b border-white/5 pb-2">Proyectos ITESS</Link>
            <Link to="/arts" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-cyan-400 font-label-caps uppercase border-b border-white/5 pb-2">Galería</Link>
            
            {session ? (
               <div className="pt-4 flex flex-col gap-3">
                 <Link to="/profile" className="flex items-center gap-3 text-cyan-400"><span className="material-symbols-outlined">memory</span> Mis Adquisiciones</Link>
                 <button onClick={handleLogout} className="flex items-center gap-3 text-error text-left"><span className="material-symbols-outlined">logout</span> Cerrar Sesión</button>
               </div>
            ) : (
              <Link to="/working" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full bg-cyan-400/10 border border-cyan-400 text-cyan-400 py-3 rounded font-label-caps uppercase flex justify-center items-center gap-2">
                <span className="material-symbols-outlined">login</span> Entrar al Sistema
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;