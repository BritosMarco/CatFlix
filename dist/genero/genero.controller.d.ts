import { Genero } from '.prisma/client';
import { CreateGeneroDto } from './create.genero.dto';
import { GeneroService } from './genero.service';
export declare class GeneroController {
    private generoService;
    constructor(generoService: GeneroService);
    findMany(): Promise<Genero[]>;
    create(createGenero: CreateGeneroDto): Promise<Genero>;
    update(updateGenero: CreateGeneroDto, id: number): Promise<Genero>;
    delete(id: string): Promise<Genero>;
}
