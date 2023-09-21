import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Btn from "../components/Btn";
import axios from "axios";
//import { Location } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [local, setLocal] = useState({ cidade: "", estado: "", pais: "" });

  const handleClick = async (e) => {
    e.preventDefault();

    axios
      .post("https://sishab-back.onrender.com/auth/login", {
        email: email,
        password: senha,
        local: {
            cidade: local.cidade,
            estado: local.estado,
            pais: local.pais,
        },
      })
      .then((response) => {
        if (!(response.status == 200)) {
          alert("Erro ao se conectar");
        } else {
          let user = response.data;
          localStorage.setItem("token", user.token);
          window.location.href = "/consultas";
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    setLocal({
      cidade: localStorage.getItem("locCidade"),
      estado: localStorage.getItem("locEstado"),
      pais: localStorage.getItem("locPais"),
    });
  }, []);

  return (
    <div className='font-sans m-0 p-0'>
      <Navbar cons={false} />
      <header>
        <h1 className='text-4xl flex align-center justify-center my-12'>Login</h1>
      </header>

      <section>
        <div className="gap-[16px] w-fit m-0 m-auto px-[40px] py-[40px] border-2 border-solid border-[#ccc] rounded-lg shadow-lg flex flex-col">
          <div className="text-black font-bold px-[10py] py-[10px] pl-[2px] bg-[#f9f9f9] border-[#ccc] rounded-[5px] shadow-lg">
            <span>Email</span>  
            <input
              className="w-full "
              type="email"
              value={email}
              onChange={(e, key) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
          </div>
          <div className="text-black font-bold px-[10py] py-[10px] pl-[2px] bg-[#f9f9f9] border-[#ccc] rounded-[5px] shadow-lg">
            <span>Senha</span>
            <input
              className="w-full"
              type="password"
              value={senha}
              onChange={(e, key) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
            <Btn txt={"Conectar"} click={(e) => handleClick(e)} />
        </div>
      </section>
    </div>
  );
}
