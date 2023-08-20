import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';


export default function Home() {
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');

    useEffect(() => {
        
        axios.get('https://ipapi.co/json').then((data) => {
            setEstado(data.data.region)
            setPais(data.data.country_name)
            setCidade(data.data.city)
        })
    },[]);

    useEffect(() => {
        localStorage.setItem("locCidade", cidade)
        localStorage.setItem("locEstado", estado)
        localStorage.setItem("locPais", pais)
        console.log("LOCAL NO HOME", localStorage)
    },[cidade]);

        return (
            <>
                <Navbar cons={false} />
                <div>
                    <h1 className='aside'>Sistema de Habitação - SISHAB</h1>
                    {/* <img src="src/img/messinho.jpg" alt="messi"></img> */}
                    <div id="home-container">
                    <h2>Localização atual</h2>
                    <p className='custom-paragraph'>Cidade: {cidade} </p>
                    </div>
                    <div className='grafico'>
                        <Chart 
                            width={'500px'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Cidades', 'Acesso'],
                                ['Sao Paulo', 2],
                                ['Rio de Janeiro', 2],
                                ['Belo Horizonte', 2],
                                ['Curitiba', 0],
                                ['Porto Alegre', 0],
                            ]}/>
                            
                    </div>
                </div>


            </>
        )
    }
