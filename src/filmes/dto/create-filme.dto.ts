import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  lancamento: string;

  @IsNotEmpty()
  duracao: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  @IsNumber({}, { each: true })
  participantes?: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  generos?: number[];
}

