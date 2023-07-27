import axios from "axios";

export async function loc() {
    const l = (await axios.request("https://ipapi.co/json")).data
    return l

}

