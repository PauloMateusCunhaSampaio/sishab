import { PrismaClient } from '@prisma/client'        
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.sishab.findMany({ where: { id: 1 } })
    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })