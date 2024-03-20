import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import WeatherDetails from "./pages/WeatherDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/WeatherDetails" element={<WeatherDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;