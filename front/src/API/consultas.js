import {api} from "./api";

export async function consulta(i) {
    return api().get("pergunta/" + i)
        .then((response) => {
            return response.data
        }
        )
        .catch((error) => {
            return error
        }
        )
    
    
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