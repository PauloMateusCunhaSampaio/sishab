import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient().sishab
import { Request, Response } from 'express'


const get1 = async (req: Request, res: Response) => {
    try{
        let question = await prisma.count({
            where: {
                txt_tipologia: "Apartamento"
            }
        })
    
        console.log(`quantidade de apartamentos: ${question}`)
        res.json(question)
    } catch (err) {
        console.log(err)
    }
}

const get2 = async (req: Request, res: Response) => {
    try{

        let question = await prisma.count({
            where: {
                txt_tipologia: "Casa",
            }
        })
        console.log(`quantidade de casas: ${question}`)
        res.json(question)
    } catch (err) {
        console.log(err)
    }
}

const get3 = async (req: Request, res: Response) => {
    try{
        let question = await prisma.count({
            where: {
                txt_tipologia: "Casa Sobreposta",
            }
        })
        console.log(`quantidade de casas sobrepostas: ${question}`)
        res.json(question)
        
    } catch (err) {
        console.log(err)
    }

}

const get4 = async (req: Request, res: Response) => {
    try{
        let question = await prisma.count({
            where: {
                txt_programa: "PMCMV",
            }
        })
        console.log(`quantidade de moradias do PMCMV: ${question}`)
        res.json(question)

    } catch (err) {
        console.log(err)
    }
}

const get5 = async (req: Request, res: Response) => {
    try{
        let question = await prisma.count({
            where: {
                txt_programa: "PCVA",
            }
        })
        console.log(`quantidade de moradias do PCVA: ${question}`)
        res.json(question)

    } catch (err) {
        console.log(err)
    }
}

//"SELECT txt_uf , COUNT (*) AS quantidade FROM sishab GROUP BY txt_uf ORDER BY COUNT (*) DESC"
const get6 = async (req: Request, res: Response) => {
    try{
        let question = await prisma.groupBy({
            by: ['txt_uf'],
            _count: {
                txt_uf: true
            },
            orderBy: {
                _count: {
                    txt_uf: 'desc'
                }
            }
        })
        let a = question[0].txt_uf
        console.log(`unidade federativa com maior quantidade de cadastros: ${a}`)
        res.json(a)

    } catch (err) {
        console.log(err)
    }
}

//SELECT COUNT (*) txt_situacao_obra FROM sishab WHERE txt_situacao_obra = 'Obras Entregues' OR txt_situacao_obra = 'Obras Concludas'
const get7 = async (req: Request, res: Response) => {
    try{
        let question = await prisma.count({
            where: {
                OR: [
                    { txt_situacao_obra: "Obras Entregues" },
                    { txt_situacao_obra: "Obras Concluídas" }
                ]
            }
        })
        console.log(`quantidade de obras entregues ou concluídas: ${question}`)
        res.json(question)

    } catch (err) {
        console.log(err)
    }
}

//SELECT SUM(CAST(qtd_uh_entregues AS INT)) FROM sishab
const get8 = async (req: Request, res: Response) => {
    try {
        let question = await prisma.aggregate({
            _count: {
                qtd_uh_entregues: true
            }
        })
    
        let a = question._count.qtd_uh_entregues
        console.log(`quantidade de unidades habitacionais entregues: ${a}`)
        res.json(a)

    } catch (err) {
        console.log(err)
    }

}

//SELECT SUM(CAST(qtd_uh_contratadas AS INT)) FROM sishab
const get9 = async (req: Request, res: Response) => {
    try {
        let question = await prisma.aggregate({
            _count: {
                qtd_uh_contratadas: true
            }
        })
    
        let a = question._count.qtd_uh_contratadas
        console.log(`quantidade de unidades habitacionais contratadas: ${a}`)
        res.json(a)

    } catch (err) {
        console.log(err)
    }

}

//SELECT COUNT(*) FROM sishab WHERE vlr_contrapartida <>'0,00' AND vlr_contrapartida IS NOT NULL;
const get10 = async (req: Request, res: Response) => {
    try {
        let question = await prisma.count({
            where: {
                AND: [
                    { vlr_contrapartida: { not: null } },
                    { vlr_contrapartida: { not: "0,00" } }
                ]
            }
        })
        console.log(`quantidade de obras com contrapartida: ${question}`)
        res.json(question)
    } catch (err) {
        console.log(err)
    }

}

export var questions = {
    get1 : get1,
    get2 : get2,
    get3 : get3,
    get4 : get4,
    get5 : get5,
    get6 : get6,
    get7 : get7,
    get8 : get8,
    get9 : get9,
    get10 : get10
}