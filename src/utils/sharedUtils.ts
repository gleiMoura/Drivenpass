import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function getUserIdByToken(authorization: string): number {
    if (!authorization) {
        throw {
            response: {
                message: "Authorization problem",
                status: 422
            }
        }
    }

    const token = authorization?.replace("Bearer ", "");

    let userId = null;

    jwt.verify(token, process.env.SECRET, (err, decoded: { userId: number }) => {
        if (err) {
            throw {
                response: {
                    message: "Invalid authentication!",
                    status: 401
                }
            }
        };

    userId = decoded.userId;
    });

    return userId;
};

export function verifyElement( data: {userId: number}, userId: number, element: string) {
    if( !data ) {
        throw {
            response: {
                message: `This/those ${element} doesn't exist`,
                status: 404
            }
        }
    };

    if( data.userId !== userId ) {
        throw {
            response:{
                message: `this ${element} is not yours`,
                status: 422
            }
        }
    }
}
