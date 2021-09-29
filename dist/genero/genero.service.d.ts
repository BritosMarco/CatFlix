import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GeneroService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllGenero(): Promise<Genero[]>;
    createGenero(data: Prisma.GeneroCreateInput): Promise<Genero>;
    deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    updateOneGenero(generoId: number, data: Prisma.GeneroCreateInput): Promise<Genero>;
}
