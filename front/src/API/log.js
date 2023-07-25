import axios from "axios";

export async function log(email, senha) {
    //request
    const url = 'https://sishab-back.onrender.com/login/'

    const body = {
        email: email,
        senha: senha
    }

    const req = await axios.post(url, body)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            return error
        })

    return req

}
