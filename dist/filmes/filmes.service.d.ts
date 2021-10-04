import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from 'src/filmes/dto/create-filme.dto';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllFilmes(): Promise<Filme[]>;
    createFilme(post: CreateFilmeDto): Promise<Filme & {
        participantes: import(".prisma/client").Participante[];
        generos: import(".prisma/client").Genero[];
    }>;
    deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    updateOneFilme(id: any, data: any): Promise<Filme & {
        participantes: import(".prisma/client").Participante[];
        generos: import(".prisma/client").Genero[];
    }>;
}
