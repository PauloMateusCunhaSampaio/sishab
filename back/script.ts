//import { PrismaClient } from '@prisma/client'        
//const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3000
const sishab_route = require('./routes/sishab.ts')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/questions", sishab_route)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})