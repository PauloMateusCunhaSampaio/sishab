import axios from "axios";
// https://ipapi.co/json
export function loc () {
    return axios.get("https://ipapi.co/json");
}
