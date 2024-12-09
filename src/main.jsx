import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';

import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Routes.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
