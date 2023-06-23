import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <header>
                <h1>Dados de Programas Habitacionais - Sistema de Habitação - SISHAB</h1>
            </header>

            <nav>
                <ul>
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/consultas">Consultas</Link></li>
                </ul>
            </nav>
        </>
    )
}
