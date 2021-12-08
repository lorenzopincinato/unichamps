import { Team } from '@prisma/client';

import { prismaClient } from '../utils/prisma';

export const createTeam = async (ownerId: string, teamData: Team) => {           
    const data = {...teamData, ownerId};

    const team = await prismaClient.team.create({
        data: data
    });

    return team;
};

export const getTeam = async (teamId: string) => { 
    console.log(teamId)
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
