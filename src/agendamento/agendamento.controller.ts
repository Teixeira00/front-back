import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { CreateAgendamentoDto } from './dto/createAgendamento.dto';
import { Agendamento } from './entities/agendamento.entity';

@Controller('agendamentos')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post()
  create(@Body() createAgendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    return this.agendamentoService.createAgendamento(createAgendamentoDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Agendamento> {
    return this.agendamentoService.findOne(id);
  }

  @Get()
  findAll(): Promise<Agendamento[]> {
    return this.agendamentoService.findAll();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.agendamentoService.remove(id);
  }
}