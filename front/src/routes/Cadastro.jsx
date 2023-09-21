import React from 'react'
import Navbar from '../components/Navbar'
import Btn from '../components/Btn'
import { useState } from 'react';
import { cadastro } from '../API/cadastro';


export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        const data = await cadastro(nome, email, senha);
        setEmail("");
        setNome("");
        setSenha("");
    }
    return (
        <div className='font-sans m-0 p-0'>
            <Navbar cons={false} />
            <header>
                <h1 className='text-4xl flex align-center justify-center my-12'>Cadastro</h1>
            </header>


            <section>
                <form>
                    <div className='gap-[16px] w-fit m-0 m-auto px-[40px] py-[40px] border-2 border-solid border-[#ccc] rounded-lg shadow-lg flex flex-col'>
                        <div className='text-black font-bold px-[10py] py-[10px] pl-[2px] bg-[#f9f9f9] border-[#ccc] rounded-[5px] shadow-lg'>
                            <label>Nome</label>
                            <input
                                type="text"
                                className='w-full'
                                value={nome}
                                onChange={(e, key) => setNome(e.target.value)}
                                placeholder='Digite seu nome'
                            />
                        </div>
                        <div className='text-black font-bold px-[10py] py-[10px] pl-[2px] bg-[#f9f9f9] border-[#ccc] rounded-[5px] shadow-lg'>
                            <label>Email</label>
                            <input
                                className='w-full'
                                type="email"
                                value={email}
                                onChange={(e, key) => setEmail(e.target.value)}
                                placeholder='Digite seu email'
                            />
                        </div>
                        <div className='text-black font-bold px-[10py] py-[10px] pl-[2px] bg-[#f9f9f9] border-[#ccc] rounded-[5px] shadow-lg'>
                            <label>Senha</label>
                            <input
                                className='w-full'
                                type="password"
                                value={senha}
                                onChange={(e, key) => setSenha(e.target.value)}
                                placeholder='Digite sua senha'
                            />
                        </div>
                        <div >
                            <Btn txt={"Cadastrar"} click={e => handleClick(e)} className={' w-full '}/>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}
