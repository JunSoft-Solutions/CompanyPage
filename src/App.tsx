/**
 * App: Root component with routing.
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeController from './controllers/HomeController';
import AboutController from './controllers/AboutController';
import ProjectsController from './controllers/ProjectsController';
import './App.css';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeController />} />
          <Route path="/about" element={<AboutController />} />
          <Route path="/projects" element={<ProjectsController />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
