import { Tournament, MatchType, Match } from '@prisma/client';

import { prismaClient } from '../utils/prisma';

export const createTournament = async (ownerId: string, tournamentData: Tournament) => {           
    const data = { ...tournamentData, ownerId };

    if (data.teamIds.length !== 8) {
        throw new Error("tournament must have 8 teams");
    }

    const tournament = await prismaClient.tournament.create({
        data: data,
        include: {
            teams: true,
        }
    });

    const finalMatch = await prismaClient.match.create({
        data: {        
            tournamentId: tournament.id,
            type: MatchType.FINAL
        },
    });

    const semiMatches = await createManyMatches([
        {
            tournamentId: tournament.id,
            type: MatchType.SEMI,
            nextMatchId: finalMatch.id
        },
        {
            tournamentId: tournament.id,
            type: MatchType.SEMI,
            nextMatchId: finalMatch.id
        }
    ])

    const quarterMatches = await createManyMatches([
        {
            tournamentId: tournament.id,
            type: MatchType.QUARTER,
            nextMatchId: semiMatches[0].id,
            homeTeamId: tournament.teams[0].id,
            visitingTeamId: tournament.teams[1].id,
        },
        {
            tournamentId: tournament.id,
            type: MatchType.QUARTER,
            nextMatchId: semiMatches[0].id,
            homeTeamId: tournament.teams[2].id,
            visitingTeamId: tournament.teams[3].id,
        },
        {
            tournamentId: tournament.id,
            type: MatchType.QUARTER,
            nextMatchId: semiMatches[1].id,
            homeTeamId: tournament.teams[4].id,
            visitingTeamId: tournament.teams[5].id,
        },
        {
            tournamentId: tournament.id,
            type: MatchType.QUARTER,
            nextMatchId: semiMatches[1].id,
            homeTeamId: tournament.teams[6].id,
            visitingTeamId: tournament.teams[7].id,
        },
    ])

    return tournament;
};

const createManyMatches = async (matchesData: {tournamentId: string, type: MatchType, nextMatchId?: string, homeTeamId?: string, visitingTeamId?: string}[]) => {
    const matches: Match[] = [];
    
    for (const matchData of matchesData) {
        const match = await prismaClient.match.create({data: matchData});

        matches.push(match);
    }

    return matches;
}

export const getTournament = async (tournamentId: string) => { 
    const tournament = await prismaClient.tournament.findFirst({
        where: {
            id: tournamentId
        },
        include: {
            teams: true,
            owner: true,
            matches: true,
        }
    });

    return tournament;
};

export const getTournaments = async () => { 
    const teams = await prismaClient.tournament.findMany({
        include: {
            teams: true,
            owner: true,
            matches: true,
        }
    });
    
    return teams;
};
