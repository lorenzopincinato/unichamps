import jwt from 'jsonwebtoken';
import { getJwtSecret } from '../io/environment';

export const validateToken = async (token: string) => { 
    return await jwt.verify(token, getJwtSecret()) as { id: string, name:string, email:string };
}
