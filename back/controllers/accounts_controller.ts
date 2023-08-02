import { PrismaClient } from '@prisma/client'        
const prisma = new PrismaClient().accounts
import { Request, Response } from 'express'
const jwt = require('jsonwebtoken')

const sign_token = (id :number) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

const sign_up = async (req :Request, res :Response) => {
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

const login = async (req :Request, res :Response) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ error: 'missing email or password' })
    }

    const account = await prisma.findUnique({
        where: {
            email,
        },
    })
    if (!account) {
        res.status(404).json({ error: 'account not found' })
    }
    else if (account.password !== password) {
        res.status(401).json({ error: 'wrong password' })
    }
    else{
        const token = sign_token(account.user_id)
        res.json({ token })
    }
}

export var auth = {
    sign_up,
    login
}
