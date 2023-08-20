import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient().accounts
import { Request, Response, NextFunction } from 'express'
const jwt = require('jsonwebtoken')
const visitas_controller = require('./visitas_controller')

const sign_token = (id: number) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

const sign_up = async (req: Request, res: Response) => {
    const { email, password, username } = req.body
    const account = await prisma.create({
        data: {
            username,
            email,
            password,
        },
    })
    console.log('conta criada');
    console.log(account);
    res.json(account);
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, local } = req.body
    
    if (!email || !password) {
        console.log('missing email or password')
        res.status(400).json({ error: 'missing email or password' })
        return next()
    }
    console.log(`O email: ${email} tentou logar`)

    const account = await prisma.findUnique({
        where: {
            email,
        },
    })
    if (!account) {
        console.log('account not found')
        res.status(404).json({ error: 'account not found' })
        return next()
    }
    else if (account.password !== password) {
        console.log('wrong password')
        res.status(401).json({ error: 'wrong password' })
        return next()
    }
    else {
        const token = sign_token(account.user_id)
        const visit = await visitas_controller.new_visit(local, account.user_id)
        if(!visit) {
            console.log('error registering visit')
            res.status(500).json({ error: 'error registering visit' })
            return next()
        }
        else{
            console.log('visita registrada')
            res.status(200).json({ token })
            return next()
        }
        
    }
}

const auth_routes = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        res.status(401).json({ error: 'not authorized' })
    }

    const decoded = jwt.decode(token, { complete: true })
    if (!decoded) {
        res.status(401).json({ error: 'not authorized' })
    }
    
    const account = await prisma.findUnique({
        where: {
            user_id: decoded.payload.id,
        },
    })
    if (!account) {
        res.status(401).json({ error: 'not authorized' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
        if (err) {
            res.status(401).json({ error: 'not authorized' })
        }
        next();
    })


}

export var auth = {
    sign_up,
    login,
    auth_routes
}
