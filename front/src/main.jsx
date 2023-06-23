import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import './styles.css'
import Consultas from './routes/Consultas';


const router = createBrowserRouter([
  { path: "/", element: <Home />, component: Home },
  { path: "/consultas", element: <Consultas />, component: Consultas },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


