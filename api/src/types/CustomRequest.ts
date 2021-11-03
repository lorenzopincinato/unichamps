import { Request } from 'express';
 
export type CustomRequest = {
    user: {
        id: string;
        name: string;
        email: string;
    }
} & Request;