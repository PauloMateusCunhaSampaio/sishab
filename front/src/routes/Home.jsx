import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-google-charts";
import { visitas_todas } from "../API/visitas";

export default function Home() {
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [visitas, setVisitas] = useState([["Cidades", "Acesso"]]);

  useEffect(() => {
    axios.get("https://ipapi.co/json").then((data) => {
      setEstado(data.data.region);
      setPais(data.data.country_name);
      setCidade(data.data.city);
    });

    visitas_todas().then((data) => {
      data.data.forEach((item) => {
        setVisitas((visitas) => [...visitas, [item.cidade, item.visitas]]);
      });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("locCidade", cidade);
    localStorage.setItem("locEstado", estado);
    localStorage.setItem("locPais", pais);
  }, [cidade]);

  return (
    <div className="font-sans m-0 p-0">
      <Navbar cons={false} />
      <div>
        <h1 className="text-4xl flex align-center justify-center my-12">Sistema de Habitação - SISHAB</h1>
        <div className="flex align-center justify-center mb-[20px]">
          <h2 className='text-2xl'>Localização atual: </h2>
          <p className="text-black font-bold px-[10py] py-[10px] pl-[2px] bg-[#f9f9f9] border-[#ccc] rounded-[5px] shadow-lg">Cidade: {cidade} </p>
        </div>
        <div>
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={visitas}
          />
        </div>
      </div>
    </div>
  );
}
