import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ParticipanteService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllParticipante(): Promise<Participante[]>;
    createParticipante(data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    deleteOneParticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    updateOneParticipante(participanteId: number, data: Prisma.ParticipanteCreateInput): Promise<Participante>;
}
