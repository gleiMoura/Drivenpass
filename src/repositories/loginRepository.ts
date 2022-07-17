import prisma from "../config/database.js";

export async function findUserByEmail( email: string ) {
    const data = await prisma.users.findUnique({
        where: {
            email
        }
    });

    return data;
};

export async function createUserByData ( email: string, password: string ) {
    await prisma.users.create({
        data:{
            email,
            password
        }
    }); 
};
