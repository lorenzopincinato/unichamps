import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { prismaClient } from '../utils/prisma';

export const authUser = async (email: string, password: string) => {
    const user = await prismaClient.user.findFirst({
        where: { email }
    });

    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            return await jwt.sign({ 
                id: user.id, 
                name: user.name, 
                email: user.email 
            }, process.env.JWT_SECRET);
        }
    }
}
