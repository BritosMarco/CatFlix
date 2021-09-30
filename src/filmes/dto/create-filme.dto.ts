import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;
  lancamento: string;
  duracao: string;

  @IsOptional()
  imagem: string;
}
