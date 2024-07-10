import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Doc } from './pages/doc.tsx';
import { Layout } from './layout/layout.tsx'
import "magic-panel/style.css"
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element:   <Layout />,
    children : [
      {
        path: "/",
        element:   <App />,
      },
      {
        path: "/documentation",
        element:   <Doc />,
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
