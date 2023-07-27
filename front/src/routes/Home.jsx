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
                    <div id="exclusive-container">
                    <h2>Current Location</h2>
                    <p>City: {currLocation} </p>
                    
                    </div>
                </div>


            </>
        )
    }
