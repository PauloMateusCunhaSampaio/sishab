import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/consultas">Consultas</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
