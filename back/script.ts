//import { PrismaClient } from '@prisma/client'        
//const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3000
const sishab_route = require('./routes/sishab.ts')
const auth_route = require('./routes/auth.ts')
const local_route = require('./routes/local.ts')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/pergunta", sishab_route)
app.use("/auth", auth_route)
app.use("/local", local_route)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})