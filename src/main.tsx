import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TechStackPage from './pages/TechStackPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="tech-stack" element={<TechStackPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
