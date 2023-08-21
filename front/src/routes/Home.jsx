import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';
import { visitas_todas } from '../API/visitas';


export default function Home() {
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [visitas, setVisitas] = useState([['Cidades', 'Acesso']]);

    useEffect(() => {
        
        axios.get('https://ipapi.co/json').then((data) => {
            setEstado(data.data.region)
            setPais(data.data.country_name)
            setCidade(data.data.city)
        })

        visitas_todas().then((data) => {
            data.data.forEach((item) => {
                setVisitas(visitas => [...visitas, [item.cidade, item.visitas]])
            })
        })

    },[]);

    useEffect(() => {
        localStorage.setItem("locCidade", cidade)
        localStorage.setItem("locEstado", estado)
        localStorage.setItem("locPais", pais)
    },[cidade]);

        return (
            <>
                <Navbar cons={false} />
                <div>
                    <h1 className='aside'>Sistema de Habitação - SISHAB</h1>
                    <div id="location-container">
                    <h2>Localização atual</h2>
                    <p className='custom-paragraph'>Cidade: {cidade} </p>
                    </div>
                    <div id='chart-container'>
                        <Chart 
                            width={'500px'}
                            height={'300px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={visitas}/>
                            
                    </div>
                </div>


            </>
        )
    }
