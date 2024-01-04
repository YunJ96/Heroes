import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Info from './pages/Info/Info';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
