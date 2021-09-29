import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;
  participacao: string;

  @IsOptional()
  imagem: string;
  datanascimento: string;
}
