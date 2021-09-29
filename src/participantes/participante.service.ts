import { Injectable } from '@nestjs/common';
import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipanteService {
  constructor(private prisma: PrismaService) {}

  async listAllParticipante(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  async createParticipante(
    data: Prisma.ParticipanteCreateInput,
  ): Promise<Participante> {
    return this.prisma.participante.create({ data });
  }

  async deleteOneParticipante(
    where: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante> {
    return this.prisma.participante.delete({ where });
  }

  async updateOneParticipante(
    participanteId: number,
    data: Prisma.ParticipanteCreateInput,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      data,
      where: {
        id: participanteId,
      },
    });
  }
}
