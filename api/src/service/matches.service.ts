import { Match } from '@prisma/client';

import { prismaClient } from '../utils/prisma';

export const getMatches = async () => { 
    const matches = await prismaClient.match.findMany({
        include: {
            tournament: true,
            homeTeam: true,
            visitingTeam: true,
            winner: true,
        }
    });

    return matches;
};

export const getMatch = async (matchId: string) => { 
    const match = await prismaClient.match.findFirst({
        where: {
            id: matchId
        },
        include: {
            tournament: true,
            homeTeam: true,
            visitingTeam: true,
            winner: true,
        }
    });

    return match;
};

export const updateMatch = async (ownerId: string, matchId: string, matchData: Match) => { 
    try {
        const matchFound = await prismaClient.match.findFirst({
            where: {
                id: matchId
            },
            include: {
                tournament: true,
            }
        });
    
        if (matchFound.tournament.ownerId !== ownerId) 
            throw new Error("only owners can update match results");
    
        const matchUpdated = await prismaClient.match.update({
            where: {
                id: matchId,
            },
            data: {
                homeTeamGoals: matchData.homeTeamGoals,
                visitingTeamGoals: matchData.visitingTeamGoals,
                winnerId: matchData.homeTeamGoals >= matchData.visitingTeamGoals ? matchFound.homeTeamId : matchFound.visitingTeamId,
            },
            include: {
                nextMatch: true,
            }
        });
    
        const nextMatch = matchUpdated.nextMatch;

        let nextMatchData = {
            visitingTeamId: null,
            homeTeamId: null,
        };

        if (!!nextMatch.homeTeamId) {
            nextMatchData.homeTeamId = nextMatch.homeTeamId;
            nextMatchData.visitingTeamId = matchUpdated.winnerId;
        }
        else {
            nextMatchData.homeTeamId = matchUpdated.winnerId;
            nextMatchData.visitingTeamId = nextMatch.visitingTeamId;
        }
    
        await prismaClient.match.update({
            where: {
                id: nextMatch.id,
            },
            data: nextMatchData,
        })
        
        return matchUpdated;
    } catch (error) {
        console.log(error)
    }
};
