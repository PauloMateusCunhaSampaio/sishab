import axios from "axios";

export const api = axios.create({
    baseURL:"https://sishab.onrender.com/",
    Headers:{
        "Content-Type": "application/json"
    }
})