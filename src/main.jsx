import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import WithLogged from './Layout/WithOutLogged/WithLogged.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path = '/'
    element = {<WithLogged/>}
    >
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
