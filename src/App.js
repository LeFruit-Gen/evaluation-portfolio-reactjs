// Framework & Core
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Header from './components/01-Header';
import Footer from './components/02-Footer';

// Pages
import Accueil from './pages/01-Accueil';
import Services from './pages/02-Services';
import Realisations from './pages/03-Realisations';
import Contact from './pages/04-Contact';
import Mentionslegales from './pages/05-Mentionslegales';


function App() {
  return (
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/services" element={<Services />} />
    <Route path="/realisations" element={<Realisations />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/mentions-legales" element={<Mentionslegales />} />
  </Routes>
  <Footer />
</Router>
  );
}

export default App;