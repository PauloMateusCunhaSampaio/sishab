import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    let {cons, onClick} = props
    if(!cons){
       return (
        <nav className='bg-[#333] text-[#fff] px-[10px] py-[10px]'>
            <ul className="list-none m-0 p-0">
                <li className="inline-block mr-[10px]"><Link className="block px-[10px] py-[10px] no-underline" to="/">Página Inicial</Link></li>
                <li className="inline-block mr-[10px]"><Link className="block px-[10px] py-[10px] no-underline" to="/cadastro">Cadastro</Link></li>
                <li className="inline-block mr-[10px]"><Link className="block px-[10px] py-[10px] no-underline" to="/login">Login</Link></li>
            </ul>
        </nav>
    )
    }
    else{
        return (
            <nav className='bg-[#333] text-[#fff] px-[10px] py-[10px]'>
                <ul className="list-none m-0 p-0">
                    <li className="inline-block mr-[10px]"><Link className="block px-[10px] py-[10px] no-underline" to="/">Página Inicial</Link></li>
                    <li className="inline-block mr-[10px]"><Link className="block px-[10px] py-[10px] no-underline" to="/consultas">Consultas</Link></li>
                    <li className="inline-block mr-[10px]"><Link className="block px-[10px] py-[10px] no-underline" to="/cadastro">Cadastro</Link></li>
                    <li className="inline-block mr-[10px]"><Link className="block px-[10px] py-[10px] no-underline" to="/login">Login</Link></li>
                </ul>
            </nav>
        )
    }
    
}
