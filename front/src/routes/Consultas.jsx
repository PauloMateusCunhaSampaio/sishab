import React, { useId, useState } from 'react'
import Navbar from '../components/Navbar'
import Btn from '../components/Btn'
import { consulta } from '../API/consultas.js'


export default function Consultas() {

    const caixinha = useId()
    const [value, setValue] = useState("1. Qual a quantidade de apartamentos envolvidos?")
    const [resultado, setResultado] = useState([])
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
        const data = await consulta(value.split(".")[0].trim())
        console.log(data) 
        setResultado(Object.values(data.response[0])[0])

    }

    return (
        <>
            <Navbar cons={true}/>
            <header>
                <h1>Consultas</h1>
            </header>


            <section>
                <h2>Selecione uma consulta:</h2>
                <div className="card">
                    <p>Período de amostragem: 20/06/2007 à 30/11/2022</p>
                </div>

                <div id='consultas-container'>
                <select id="{caixinha}" name="consulta" onChange={e => setValue(e.target.value)} value={value}>
                    {array.map((item) => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })
                    }
                </select>
                <div id='btn-consultas'>
                <Btn txt={"Consultar"} click={e => handleClick(e)} />
                </div>
                <div>

                </div>
                    <p>Resultado da consulta:</p>
                    <p>{resultado}</p>
                </div>
            </section>
        </>
    )
}
