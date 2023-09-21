import React, { useEffect, useId, useState } from 'react'
import Navbar from '../components/Navbar'
import Btn from '../components/Btn'
import { consulta } from '../API/consultas.js'


export default function Consultas() {

    const caixinha = useId()
    const [value, setValue] = useState("1. Qual a quantidade de apartamentos envolvidos?")
    const [resultado, setResultado] = useState([])
    const [token, setToken] = useState('')
    const array = [
        "1. Qual a quantidade de apartamentos envolvidos?",
        "2. Qual a quantidade de casas envolvidas?",
        "3. Qual a quantidade de casas sobrepostas envolvidas?",
        "4. Quantos pertencem ao PMCMV - \"Programa Minha Casa Minha Vida\"?",
        "5. Quantos pertencem ao PCVA - \"Programa Casa Verde Amarela\"?",
        "6. Em que unidade federal do Brasil se concentra a maior parte dos cadastros?",
        "7. Quantos tiveram sua obra entregue ou concluída?",
        "8. Qual a quantidade de unidades entregues?",
        "9. Qual a quantidade de unidades contratadas?",
        "10. Qual a quantidade de unidades com valor de contrapartida não nulo?"
    ]

    const handleClick = async (e) => {
        e.preventDefault();
        const data = await consulta(value.split(".")[0].trim(), token)
        // console.log(data) 
        setResultado(data)

    }

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    return (
        <div className='font-sans m-0 p-0'>
            <Navbar cons={true}/>
            <h1 className='text-4xl'>Consultas</h1>


            <section>
                <div className='px-[20px] py-[20px]'>
                <h2 className='text-2xl'>Selecione uma consulta:</h2>
                

                <div id='gap-[16px] w-fit m-0 m-auto px-[100px] py-[100px] border-1 border-solid rounded-lm shadow-lg flex'>
                <select id="{caixinha}" name="consulta" onChange={e => setValue(e.target.value)} value={value}>
                    {array.map((item) => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        )
                    })
                    }
                </select>
                <div id='flex justify-evenly align-end m-20'>
                <Btn txt={"Consultar"} click={e => handleClick(e)} className='bg-[#ccc]'/>
                </div>
                <div>
                
                <div className="bg-[#f0f0f0] rounded-sm px-[4px] py-[4py] shadow-sm mb-[20px] mt-12">
                    <p>Período de amostragem: 20/06/2007 à 30/11/2022</p>
                </div>
                </div>
                    <p>Resultado da consulta:</p>
                    <p >{resultado}</p> 
                    
                </div>
                </div>
            </section>
        </div>
    )
}
