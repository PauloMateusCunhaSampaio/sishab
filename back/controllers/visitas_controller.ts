import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { Request, Response } from 'express'

export async function new_visit(dados: { pais: string, cidade: string, estado: string }, user_id: number) {
    const { pais, cidade, estado } = dados;
    prisma.lugar.findFirst({
        where: {
            pais,
            cidade,
            estado
        }
    }).then((lugar) => {
        if (lugar) {
            console.log("achou o lugar: ", lugar)
            prisma.visita.create({
                data: {
                    user_id: user_id,
                    lugar_id: lugar.lugar_id,
                    data: new Date()
                }
            })
                .then((visita) => {
                    console.log("criou a visita: ", visita)
                })
        }
        else {
            console.log("não achou o lugar")
            prisma.lugar.create({
                data: {
                    pais,
                    cidade,
                    estado
                }
            }).then((lugar) => {
                console.log("criou o lugar: ", lugar)
                prisma.visita.create({
                    data: {
                        user_id: user_id,
                        lugar_id: lugar.lugar_id,
                        data: new Date()
                    }
                })
                    .then((visita) => {
                        console.log("criou a visita: ", visita)
                    })
            })
        }
    })
}

const count_visits_city = async (req: Request, res: Response) => {
    const vis = await prisma.visita.count({
        select: {
            _all: true,
        }
        
    })



    res.json(vis)
}

export var visitas = {
    count_visits_city,
}