
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

import { prismaClient } from '../utils/prisma';

export const createUser = async (userData: User) => {
    const hash = await bcrypt.hash(userData.password, 10); 
        
    const data = { ...userData, password: hash};

    const user = await prismaClient.user.create({
        data: data
    });

    return user;
}

