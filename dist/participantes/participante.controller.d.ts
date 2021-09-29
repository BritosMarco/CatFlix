import { CreateParticipanteDto } from './dto/create.participante.dto';
import { ParticipanteService } from './participante.service';
import { Participante } from '.prisma/client';
export declare class ParticipanteController {
    private participanteService;
    constructor(participanteService: ParticipanteService);
    findMany(): Promise<Participante[]>;
    create(createParticipante: CreateParticipanteDto): Promise<Participante>;
    update(updateParticipante: CreateParticipanteDto, id: number): Promise<Participante>;
    delete(id: string): Promise<Participante>;
}
