import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function new_visit(dados: {pais: string, cidade: string, estado: string}, user_id: number) {
    const { pais, cidade, estado } = dados;
    prisma.lugar.findFirst({
        where: {
            pais,
            cidade,
            estado
        }
    }).then((lugar) => {
        if (lugar) {
            prisma.visita.create({
                data: {
                    user_id: user_id,
                    lugar_id: lugar.lugar_id,
                    data: new Date()
                }
            })
        }
        else {
            prisma.lugar.create({
                data: {
                    pais,
                    cidade,
                    estado
                }
            }).then((lugar) => {
                prisma.visita.create({
                    data: {
                        user_id: user_id,
                        lugar_id: lugar.lugar_id,
                        data: new Date()
                    }
                })
            })
        }
    })
}
