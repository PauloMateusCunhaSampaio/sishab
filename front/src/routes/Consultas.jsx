import React, { useId, useState } from 'react'
import { Link } from 'react-router-dom'

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

    function handleClick(e) {
        const url = "http://52.55.212.113:8081/" + value.split(".")[0].trim();
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                
                setResultado(Object.values(data.response[0])[0])
                console.log(data)
            }
            ).catch((error) => {setResultado("Erro ao consultar")})
    }

    return (
        <>
            <header>
                <h1>Consultas</h1>
            </header>

            <nav>
                <ul>
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/consultas">Consultas</Link></li>
                </ul>
            </nav>

            <section>
                <h2>Selecione uma consulta:</h2>
                <div id="consulta-container"></div>
                <div className="card">
                <p>Período de amostragem: 20/06/2007 à 30/11/2022</p></div>

                <select id="{caixinha}" name="consulta" onChange={e => setValue(e.target.value)} value={value}>
                    {array.map((item) => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })
                    }
                </select>
              <button onClick={e => handleClick(e)}>
                Consultar 
              </button>
              <div>
                <p>Resultado da consulta:</p>
                <p>{resultado}</p>
              </div>
            </section>
        </>
    )
}
