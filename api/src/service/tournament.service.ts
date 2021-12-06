import { Tournament } from '@prisma/client';

import { prismaClient } from '../utils/prisma';

export const createTournament = async (ownerId: string, tournamentData: Tournament) => {           
    const data = { ...tournamentData, ownerId };

    const tournament = await prismaClient.tournament.create({
        data: data
    });

    return tournament;
};

export const getTournament = async (tournamentId: string) => { 
    const tournament = await prismaClient.tournament.findFirst({
        where: {
            id: tournamentId
        },
        include: {
            teams: true,
            owner: true
        }
    });

    return tournament;
};

export const getTournaments = async () => { 
    const teams = await prismaClient.tournament.findMany({
        include: {
            teams: true,
            owner: true
        }
    });
    
    return teams;
};
