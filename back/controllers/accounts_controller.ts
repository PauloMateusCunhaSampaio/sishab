import { PrismaClient } from '@prisma/client'        
const prisma = new PrismaClient().accounts

exports.get