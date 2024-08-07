import { IsDate } from "class-validator";
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { CreateAddress } from '../../location/dto/create-address.dto';
import { Type } from 'class-transformer';



  export class CreateAgendamentoDto {
    @IsString()
    nome: string;
  
    @IsString()
    telefone: string;
  
    @IsString()
    cpf: string;

    @IsString()
    servico: string;

    @IsString()
    profissional: string;
  
    @IsDate()
    data: Date;
  
    @IsString()
    horario: string;
  
    @ValidateNested()
    @Type(() => CreateAddress)
    address: CreateAddress;
  }
  