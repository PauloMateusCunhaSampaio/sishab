import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import './styles.css'
import Consultas from './routes/Consultas';
import Cadastro from './routes/Cadastro';
import Login from './routes/Login';


const router = createBrowserRouter([
  { path: "/", element: <Home />, component: Home },
  { path: "/consultas", element: <Consultas />, component: Consultas },
  { path: "/cadastro", element: <Cadastro />, component: Cadastro },
  { path: "/login", element: <Login />, component: Login },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)


