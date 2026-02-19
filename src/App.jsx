/**
 * App: Root component with routing.
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeController from './controllers/HomeController';
import AboutController from './controllers/AboutController';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeController />} />
          <Route path="/about" element={<AboutController />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
