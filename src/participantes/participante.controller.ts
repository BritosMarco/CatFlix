import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create.participante.dto';
import { ParticipanteService } from './participante.service';
import { Participante } from '.prisma/client';

@Controller('participante')
export class ParticipanteController {
  constructor(private participanteService: ParticipanteService) {}

  @Get('/lista')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Participante[]> {
    return this.participanteService.listAllParticipante();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createParticipante: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.participanteService.createParticipante(createParticipante);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateParticipante: CreateParticipanteDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participante> {
    return this.participanteService.updateOneParticipante(
      id,
      updateParticipante,
    );
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participanteService.deleteOneParticipante({ id: Number(id) });
  }
}
