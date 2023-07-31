import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import { loc } from '../API/location';

export default function Home() {
    const [currLocation, setCurrLocation] = useState([]);
    const l = sessionStorage.getItem("safeLoc")

    useEffect(() => {
        if(l)
        {
            setCurrLocation(l)
        }
        else
        {
            getLocation() 
            sessionStorage.setItem("safeLoc", currLocation)
        }
        
    },[]);
    
    const getLocation = async () => {
        loc()
        .then((data) => {
            setCurrLocation(data.city)
        })
    }

        return (
            <>
                <Navbar cons={false} />
                <div>
                    <h1 className='aside'>Sistema de Habitação - SISHAB</h1>
                    <img src="src/img/messinho.jpg" alt="messi"></img>
                    <div id="home-container">
                    <h2>Localização atual</h2>
                    <p className='custom-paragraph'>Cidade: {currLocation} </p>
                    
                    </div>
                </div>


            </>
        )
    }
