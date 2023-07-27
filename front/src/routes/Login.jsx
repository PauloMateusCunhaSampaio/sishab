import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react"
import Btn from '../components/Btn'
import {log} from '../API/log.js'


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
       /* const response = await log(email, senha)
        console.log(response)

        if (!response) {
            alert("Email ou senha incorretos")
        }
        else {
            user = response.data;
            localStorage.setItem("key", JSON.stringify(user.key));
            
        }*/window.location.href = "/consultas";
    }

        return (
            <>
                <Navbar cons={false} />
                <header>
                <h1>Login</h1>    
                </header>
                
                <section>
                    
                    <h2>Bem vindo</h2>
                    <div id="login-container"></div>
                    <div className="card">
                        <p>Insira seus dados para acessar o sistema</p>
                    </div>
                    <div className="container">
                        <div>
                            <p className="custom-paragraph">Email</p>
                            <input
                                className='input'
                                type="email"
                                value={email}
                                onChange={(e, key) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="custom-paragraph">Senha</p>
                            <input
                                className='input'
                                type="senha"
                                value={senha}
                                onChange={(e, key) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className='btnLogin'>
                            <Btn txt={"Conectar"} click={e => handleClick(e)} />
                        </div>
                    </div>
                </section>

            </>
        )
    }
