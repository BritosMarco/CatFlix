import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  participacao: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  data_nascimento: string;
}
