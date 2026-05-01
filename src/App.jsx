import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Landing from './pages/Landing';
import Sandbox from './pages/Sandbox';
import ProjectDetail from './pages/ProjectDetail';
import Arts from './pages/Arts';
import Success from './pages/Success';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Profile from './pages/Profile';
import Error404 from './pages/Error404'; 
import Working from './pages/Working';

function App() {
  return (
    <Router>
      {/* Navbar global que se renderiza en todas las vistas */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/sandbox/:projectId" element={<ProjectDetail />} />
        
        {/* Rutas del Ecosistema Niklan Arts */}
        <Route path="/arts" element={<Arts />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/success" element={<Success />} />
        <Route path="/working" element={<Working />} />
        
        {/* Ruta para capturar cualquier URL inválida (Error 404) */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;