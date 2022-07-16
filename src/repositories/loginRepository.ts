import connection from "../config/database.js";

export async function findUserByEmail( email: string ) {
    const data = await connection.users.findUnique({
        where: {
            email
        }
    });

    return data;
};

export async function createUserByData ( email: string, password: string ) {
    await connection.users.create({
        data:{
            email,
            password
        }
    }); 
};
