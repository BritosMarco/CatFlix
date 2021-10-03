import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  lancamento: string;

  @IsNotEmpty()
  duracao: string;

  @IsOptional()
  imagem: string;


}
