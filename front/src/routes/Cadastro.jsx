import React from 'react'
import Navbar from '../components/Navbar'
import Btn from '../components/Btn'
import { useState } from 'react';


export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
            <Navbar cons={false} />
            <header>
                <h1>Cadastro</h1>
            </header>


            <section>
                <h2>Faça seu cadastro</h2>
                <div className="card">
                    <p>Preencha o formulário abaixo</p>
                </div>
                <form >
                    <div className='container'>
                        <div className='custom-paragraph'>
                            <label>Nome:</label>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e, key) => setNome(e.target.value)}
                                placeholder='Digite seu nome'
                            />
                        </div>
                        <div className='custom-paragraph'>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e, key) => setEmail(e.target.value)}
                                placeholder='Digite seu email'
                            />
                        </div>
                        <div className='custom-paragraph'>
                            <label>Senha:</label>
                            <input
                                type="senha"
                                value={senha}
                                onChange={(e, key) => setSenha(e.target.value)}
                                placeholder='Digite sua senha'
                            />
                        </div>
                        <div className='btn'>
                            <Btn txt={"Cadastrar"} click={e => handleClick(e)} />
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
