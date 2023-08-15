import {api} from "./api";

export async function log(email, senha) {
    return api.post("auth/login", {
        email: email,
        password: senha
    })
        .then((response) => {
            return response
        }
        )
        .catch((error) => {
            return error
        })

}
