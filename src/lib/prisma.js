import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient();

const prisma = prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
