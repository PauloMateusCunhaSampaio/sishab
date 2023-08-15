import axios from "axios";

export async function log(email, senha) {
    
    const url = 'https://sishab.onrender.com/auth/login'

    const body = {
        email: email,
        password: senha
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
