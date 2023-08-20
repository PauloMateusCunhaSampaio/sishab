import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { Request, Response } from 'express'

export async function new_visit(dados: { pais: string, cidade: string, estado: string }, user_id: number) {
    
    
    try {
        const { pais, cidade, estado } = dados;
        const visit = await prisma.visita.create({
            data: {
                user_id,
                pais,
                cidade,
                estado,
            }
        })
    } catch (error) {

        return false
    } 
    return true
}

const count_visits_city = async (req: Request, res: Response) => {
    const vis = await prisma.visita.groupBy({
        by: ['cidade'],
        _count: {
            visita_id: true,
        },
    })

    let dados: {cidade: string, visitas: number}[] = [];
    vis.forEach((log) => {
        dados.push({cidade: log.cidade, visitas: log._count.visita_id})
    })
    res.json(dados);

}

export var visitas = {
    count_visits_city,
}