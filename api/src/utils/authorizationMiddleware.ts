import { Response, NextFunction } from "express";
import { CustomRequest } from "../types/CustomRequest";
import { validateToken } from "./token";

export const authorizationMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
    
            if (token) {
                const payload = await validateToken(token);
                req.user = payload;
    
                next();
            } 
            else {
                res.status(401).json({ message: "Token not provided" });
            }
        } else {
            res.status(401).json({ message: "Token not provided" });
        }
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}