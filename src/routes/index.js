import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Lines from '../pages/Lines';
import LineDetails from '../pages/LineDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Lines />} />
      <Route path="/about" element={<About />} />
      <Route path="/bus_lines/:id" element={<LineDetails />} />
    </Routes>
  )
}

export default AppRoutes;
