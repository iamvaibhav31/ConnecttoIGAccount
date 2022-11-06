import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profileveiw from './pages/Profileveiw';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route exact path='/IGProfile' element={<Profileveiw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
