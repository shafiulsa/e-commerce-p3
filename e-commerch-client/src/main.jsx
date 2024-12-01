import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";

import { router } from './Routes/Routes.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>


    <div className='max-w-screen-xl mx-auto'>

      <AuthProvider>

        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      
      </AuthProvider>




    </div>
  </StrictMode>,
)
