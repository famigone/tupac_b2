import { protectRoutes } from '@hilla/react-auth';
import HelloWorldView from 'Frontend/views/helloworld/HelloWorldView.js';
import LoginView from 'Frontend/views/login/LoginView.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomeMateria from './views/materia/HomeMateria';
import HomeMateriaEstudiante from './views/materia/HomeMateriaEstudiante';
import HomePractico from './views/practico/HomePractico';
import HomeDesafio from './views/practico/HomeDesafio';
const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

export const routes = protectRoutes([
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <HelloWorldView />, handle: { title: 'TUPAC', requiresLogin: true } },
      { path: '/materias', element: <HomeMateria />, handle: { title: 'Materias', requiresLogin: true } },
      { path: '/materia', element: <HomeMateriaEstudiante />, handle: { title: 'Materias', requiresLogin: true } },
      { path: '/practicos', element: <HomePractico />, handle: { title: 'Prácticos', requiresLogin: true } },      
      { path: '/desafios/:practicoid', element: <HomeDesafio />, handle: { title: 'Desafíos', requiresLogin: true } },      
      { path: '/about', element: <AboutView />, handle: { title: 'About', requiresLogin: true } },
    ],
  },
  { path: '/login', element: <LoginView /> },
]) as RouteObject[];

export default createBrowserRouter(routes);
