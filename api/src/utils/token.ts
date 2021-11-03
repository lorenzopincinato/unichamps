import jwt from 'jsonwebtoken';

export const validateToken = async (token: string) => { 
    return await jwt.verify(token, process.env.JWT_SECRET) as { id: string, name:string, email:string };
}
