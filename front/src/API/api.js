import axios from "axios";

export const api = axios.create({
    baseURL:"https://sishab-back.onrender.com/",
})