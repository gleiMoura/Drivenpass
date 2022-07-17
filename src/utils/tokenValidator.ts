import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function verifyToken(token: string): number {
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
