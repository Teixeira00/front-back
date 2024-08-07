import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAgendamentoDto } from './dto/createAgendamento.dto';
import { Agendamento } from './entities/agendamento.entity';

@Injectable()
export class AgendamentoService {
  constructor(private readonly prisma: PrismaService) {}

  async createAgendamento(data: CreateAgendamentoDto): Promise<Agendamento> {
    return await this.prisma.agendamento.create({
      data,
    });
  }

  async findOne(id: number): Promise<Agendamento> {
    return await this.prisma.agendamento.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<Agendamento[]> {
    return await this.prisma.agendamento.findMany();
  }

  async remove(id: number): Promise<void> {
    await this.prisma.agendamento.delete({
      where: { id },
    });
  }
}