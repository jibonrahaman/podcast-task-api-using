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
import PodCast from './Pages/PodCast';
import { Provider } from 'react-redux'
import { store } from './Store/Store';

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
     <Route
     path='/podcast'
     element = {<PodCast/>}
     />

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
   <RouterProvider router={router} />
 </Provider>
  </React.StrictMode>,
)
