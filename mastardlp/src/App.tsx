import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Start from './pages/Start';
import Business from './pages/Business';
import Coach from './pages/Coach';
import Curriculum from './pages/Curriculum';
import AboutCompany from './pages/AboutCompany';

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Start />} />
      <Route path={`/business/`} element={<Business />} />
      <Route path={`/coach/`} element={<Coach />} />
      <Route path={`/curriculum/`} element={<Curriculum />} />
      <Route path={`/aboutcompany/`} element={<AboutCompany />} />
    </Routes>
  );
}

export default App;
