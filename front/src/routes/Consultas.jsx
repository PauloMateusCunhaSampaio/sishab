import React, { useId, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Consultas() {

    const caixinha = useId()
    const [value, setValue] = useState("1. Qual a quantidade de apartamentos envolvidos?")
    const array = ["1. Qual a quantidade de apartamentos envolvidos?",
    "2. Qual a quantidade de casas envolvidas?",
    "3. Qual a quantidade de casas sobrepostas envolvidas?",
    "4. Quantos pertencem ao PMCMV - \"Programa Minha Casa Minha Vida\"?",
    "5. Quantos pertencem ao PCVA - \"Programa Casa Verde Amarela\"?",
    "6. Em que unidade federal do Brasil se concentra a maior parte dos cadastros?",
    "7. Quantos tiveram sua obra entregue ou concluída?",
    "8. Qual a quantidade de unidades entregues?",
    "9. Qual a quantidade de unidades contratadas?",
    "10. Qual a quantidade de unidades com valor de contrapartida não nulo?"]

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
                <h2>Consultas</h2>
                <div id="destaque-container"></div>
                <select id="{caixinha}" name="consulta" onChange={e => setValue(e.target.value)} value={value}>
                    {array.map((item) => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })
                    }
                </select>
              {value}
            </section>
        </>
    )
}
