import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Outlets from './RootLayout/Outlets';
import HomePages from './Pages/HomePages';
import Logged from './Pages/Logged';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path = '/'
    element = {<Outlets />}
    >
     <Route
     path='/'
     element = {<HomePages />}
     />
     <Route
     path='/logged'
     element = {<Logged />}
     />

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
