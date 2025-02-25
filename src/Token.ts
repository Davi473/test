import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default class Token 
{
    private static secretKey: string = process.env.SECRET_KEY || "secretKey";

    public static async create(id: string | number, name: string)
    {
        const timeExpire = "15d"
        const userDate = { id, name };
        const token = jwt.sign(userDate, Token.secretKey, { expiresIn: timeExpire });
        return token;
    }

    private static descodificarToken(token: any): any | boolean
    {
        try
        {
            const tokenNew = token.replace("Bearer ", "");
            const tokenDescodificado = jwt.verify(tokenNew, Token.secretKey);
            return tokenDescodificado;
        }
        catch (error)
        {
            return false
        }
    }

    public static authToken(req: Request, res: Response, next: NextFunction)
    {
        const authHeader = req.headers["authorization"];
        const token = Token.descodificarToken(authHeader);

        if(token)
        {
            (req as Request & { user: { name: string; id: string } }).user = {
                name: token.name,
                id: token.id,
            };
            next();
        }
        else
        {
         res.status(401).send({ message: "Not Auth" });
        }
    }
}