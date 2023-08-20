import {api} from "./api";

export async function consulta(i, token) {
    if (token) {
        return api.get("pergunta/" + i, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                return response.data
            }
            )
            .catch((error) => {
                return error
            }
            )
        }
    else {
        return false
    }
    
    
}


// export async function consulta(i) {
//     const url = "https://sishab-back.onrender.com/pergunta/" + i;
//     const req = await axios.get(url)
//         .then((response) => {
//             return response.data
//         }
//         )
//         .catch((error) => {
//             return error
//         }
//         )
//     return req
// }