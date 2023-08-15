import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react"
import Btn from '../components/Btn'
import {log} from '../API/log.js'
//import { Location } from 'react-router-dom'


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await log(email, senha)
        console.log(response)
        window.location.href = "/consultas";
        /*if(!(response.status == 200 && response.status)){
            alert("Erro ao se conectar")
        }
        else {
            let user = response.data;
            console.log(user)
            localStorage.setItem("key", JSON.stringify(user.key));
            window.location.href = "/consultas";
        }
       */
        
    }
    

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

            </>
        )
    }
