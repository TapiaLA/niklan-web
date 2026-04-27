import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Sandbox from './pages/Sandbox'
import ProjectDetail from './pages/ProjectDetail';
import Arts from './pages/Arts'; // Importamos Arts

function App() {
  return (
    <Router>
      <nav className="bg-zinc-950/80 backdrop-blur-md fixed top-0 w-full flex justify-between items-center px-8 py-4 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 border-b border-white/10">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo con nombre corregido y tamaño más grande */}
          <img src="/niklanlogo.png" alt="Logo Niklan" className="h-12 w-auto object-contain group-hover:rotate-6 transition-transform duration-300" />
          <div className="text-xl font-bold tracking-widest text-white uppercase relative overflow-hidden">
            <span className="relative z-10">Niklan</span>
            <span className="absolute inset-0 text-cyan-400 group-hover:animate-glitch-1 opacity-0 group-hover:opacity-100 transition-opacity">Niklan</span>
            <span className="absolute inset-0 text-error group-hover:animate-glitch-2 opacity-0 group-hover:opacity-100 transition-opacity">Niklan</span>
          </div>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center font-inter text-sm tracking-tighter uppercase font-medium">
          {/* Usamos <a> para anclas en la misma página */}
          <a className="text-zinc-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all scale-95 hover:scale-105 active:scale-95" href="/#software">Software</a>
          <a className="text-zinc-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all scale-95 hover:scale-105 active:scale-95" href="/#hardware">Hardware</a>
          
          {/* Usamos <Link> para ir a la página separada del Sandbox */}
          <Link className="text-zinc-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all scale-95 hover:scale-105 active:scale-95" to="/sandbox">Proyectos ITESS</Link>
        </div>
        <button className="hidden md:inline-flex items-center justify-center bg-secondary-container text-white px-6 py-2 rounded font-label-caps uppercase hover:bg-on-secondary-fixed hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
          Contacto
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/sandbox/:projectId" element={<ProjectDetail />} />
        <Route path="/arts" element={<Arts />} /> {/* <- AQUÍ ESTÁ TU NUEVA RUTA */}
      </Routes>
    </Router>
  )
}

export default App