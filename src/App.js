
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.min.css'; 
import Home from './pages/components/Home';
import About from './pages/components/About';

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      
        
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        
    
    </Routes>
  </BrowserRouter>
  );
}

