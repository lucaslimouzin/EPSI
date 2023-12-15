import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './registration/Login.js';


import Shooter from './jeux/Shooter'
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';

  function App() {
  return (
  
      <div>
       <BrowserRouter>
        <nav>
          <Link to="/shooter">Aller à la page Shooter</Link>
        </nav>
          <Routes>
            <Route path="/shooter" element={<Shooter />} />
            
          </Routes>
        </BrowserRouter>
        
      </div>
    
  );
}

export default App;
