import axios from "axios";

export async function consulta(i) {
    const url = "https://sishab-back.onrender.com/pergunta/" + i;
    const req = await axios.get(url)
        .then((response) => {
            return response.data
        }
        )
        .catch((error) => {
            return error
        }
        )
    return req
}