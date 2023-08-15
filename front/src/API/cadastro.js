export async function cadastro(nome, email, senha) {    
    const url = "https://sishab.onrender.com/auth/cadastro";
    const req = await axios.post(url, {
        username: nome,
        email: email,
        passowrd: senha
    })
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