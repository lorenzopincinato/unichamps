import { Team, User } from '@prisma/client';

import { prismaClient } from '../utils/prisma';

export const createTeam = async (ownerId: string, teamData: Team) => {           
    const data = {...teamData, ownerId: ownerId}; // FIXME: ownerId: pegar o id que está vindo

    const team = await prismaClient.team.create({
        data: data
    });

    return team;
};

export const getTeam = async (teamId: string) => { 
    const team = await prismaClient.team.findFirst({
        where: {
            id: teamId
        },
        include: {
            players: true,
            owner: true
        }
    });

    return team;
};

export const getTeams = async () => { 
    const teams = await prismaClient.team.findMany({
        include: {
            players: true,
            owner: true
        }
    });
    
    return teams;
};
