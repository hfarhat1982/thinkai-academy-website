import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShortCourses from './pages/ShortCourses';
import QualiopiCourses from './pages/QualiopiCourses';
import AITools from './pages/AITools';
import QualiopiCommitment from './pages/QualiopiCommitment';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formations-courtes" element={<ShortCourses />} />
          <Route path="/parcours-qualiopi" element={<QualiopiCourses />} />
          <Route path="/outils-ia" element={<AITools />} />
          <Route path="/qualiopi" element={<QualiopiCommitment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;