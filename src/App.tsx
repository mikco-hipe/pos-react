import React from 'react';
import { RouterProvider } from 'react-router-dom'
import { router } from './router';
import '@/styles/index.scss';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App
