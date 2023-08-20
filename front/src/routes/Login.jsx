import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react"
import Btn from '../components/Btn'
import axios from 'axios'
//import { Location } from 'react-router-dom'


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [local, setLocal] = useState({ cidade: "", estado: "", pais: "" });

    const handleClick = async (e) => {
        e.preventDefault();

        
        
        console.log(response);

        if(!(response.status == 200)){
            alert("Erro ao se conectar")
        }
        else {
            let user = response.data;
            localStorage.setItem("key",user.key);
            window.location.href = "/consultas";
        }
       
        
    }
    
    useEffect(() => {
        setLocal({
            cidade: localStorage.getItem("locCidade"),
            estado: localStorage.getItem("locEstado"),
            pais: localStorage.getItem("locPais")
        })
    },[]);


        return (
            <>
                <Navbar cons={false} />
                <header>
                <h1>Login</h1>    
                </header>
                
                <section>
                    
                    <h2>Bem vindo</h2>
                    <div className="card">
                        <p>Insira seus dados para acessar o sistema</p>
                    </div>
                    <div className="container">
                        <div className="custom-paragraph">
                        <span>Email</span>
                            <input
                                className='input'
                                type="email"
                                value={email}
                                onChange={(e, key) => setEmail(e.target.value)}
                                placeholder='Digite seu email'
                            />
                        </div>
                        <div className="custom-paragraph">
                            <span>Senha</span>
                            <input
                                className='input'
                                type="senha"
                                value={senha}
                                onChange={(e, key) => setSenha(e.target.value)}
                                placeholder='Digite sua senha'
                            />
                        </div>
                        <div className='btn'>
                            <Btn txt={"Conectar"} click={e => handleClick(e)} />
                        </div>
                    </div>
                </section>

                <p>{local.cidade}</p>

            </>
        )
    }
