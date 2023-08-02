import { PrismaClient } from '@prisma/client'        
const prisma = new PrismaClient().accounts

exports.sign_up = async (req, res) => {
    const { email, password, username } = req.body
    const account = await prisma.create({
        data: {
            username,
            email,
            password,
        },
    })
    res.json(account)
    }