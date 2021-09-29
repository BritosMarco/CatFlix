import { Injectable } from '@nestjs/common';
import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async listAllGenero(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async createGenero(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({ data });
  }

  async deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async updateOneGenero(
    generoId: number,
    data: Prisma.GeneroCreateInput,
  ): Promise<Genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId,
      },
    });
  }
}
