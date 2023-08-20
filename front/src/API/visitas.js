import { api } from "./api";

export async function visitas_todas() {
    return api.post("local/conta_cidades")
    .then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error)
    })
}