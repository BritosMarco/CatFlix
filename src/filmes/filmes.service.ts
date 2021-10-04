import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from 'src/filmes/dto/create-filme.dto'

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

 async listAllFilmes(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  } 

  async createFilme(post: CreateFilmeDto)
 /*    async createFilme(post: Prisma.FilmeCreateInput): Promise<Filme>   */

  {
    const participantes = post.participantes?.map((participante) => ({
      id: participante,
    }));
     const generos = post.generos?.map((genero) => ({
      id: genero, 
    }));
    return this.prisma.filme.create({ data:
    {
        nome: post.nome,
        lancamento: post.lancamento,
        imagem: post.imagem,
        duracao: post.duracao,
        participantes: {
          connect: participantes,
        },
        generos: {
          connect: generos,
        },
      },
      include: {
        participantes: true,
        generos: true,
      },
     
    });
  }

  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

/*   async updateOneFilme(
    filmeId: number,
    data: Prisma.FilmeCreateInput, 
  ): Promise<Filme> {
    return this.prisma.filme.update({ data, where: { id: filmeId } });
  }*/

   async updateOneFilme(id
   , data) {
       const participantes = data.participantes?.map((participante) => ({
      id: participante,
    }));
     const generos = data.generos?.map((genero) => ({
      id: genero, 
    }));
    return await this.prisma.filme.update({
      data: 
        Object.assign(Object.assign({}, data), { participantes: {
                    connect: participantes,
                }, generos: {
                    connect: generos,
                } }),
            include: {
                generos: true,
                participantes: true,
                },
        /* ...post,
        id: undefined, */
      
      where: {
        id,
      }, 
    });
  }
} 

