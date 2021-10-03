import { Genero } from '.prisma/client';
import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { CreateGeneroDto } from './create.genero.dto';
import { GeneroService } from './genero.service';
/* import { Genero } from '.prisma/client'; */

@Controller('genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  @Get('/lista')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generoService.listAllGenero();
  }

  @Post('/Create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<Genero> {
    return this.generoService.createGenero(createGenero);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateGenero: CreateGeneroDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Genero> {
    return this.generoService.updateOneGenero(id, updateGenero);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generoService.deleteOneGenero({ id: Number(id) });
  }
}
