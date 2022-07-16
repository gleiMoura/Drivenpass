import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "@prisma/client";
import { createUserByData, findUserByEmail } from "../repositories/loginRepository.js";

export type CreateUserData = Omit<users, "id">;

export async function createNewUser( user: CreateUserData ) {
    const userData = await findUserByEmail( user.email );
    if( userData ) {
        throw {
            response:{
                message: "User aready in use",
                status: 409
            }
        }
    };

    const cryptPassword = await bcrypt.hash(user.password, 10);

    await createUserByData( user.email, cryptPassword  );
};

export async function generateToken( user: CreateUserData ) {
    const userFromDatabase = await findUserByEmail( user.email );
    if( !userFromDatabase ) {
        throw {
            response:{
                message: "Create a new profile",
                status: 404
            }
        }
    };

    const { password } = userFromDatabase; 
    const passwordBoolean: boolean = bcrypt.compareSync(user.password, password);
    if( !passwordBoolean ) {
        throw {
            response: {
                message: "Password is not valid",
                status: 409
            }
        }
    };

    const token = jwt.sign({ email: user.email }, process.env.SECRET, {expiresIn: 3000});

    return token;
}