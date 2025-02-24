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

    public static auth(token: any): boolean | any
    {
        try {
            const user = jwt.verify(token, Token.secretKey);
            return user;
        } catch (err: any) {
            return false;
        }
    }
}