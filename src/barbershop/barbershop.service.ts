import { Injectable, NotFoundException } from '@nestjs/common';
import { LocationService } from 'src/location/location.service';
// import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { BarbershopRepository } from './repositories/barbershopRepository';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { Barbershop } from './entities/barbershop.entity';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class BarbershopService {
  constructor(
    private barbershopRepository: BarbershopRepository,
    private locationService: LocationService,
  ) {}

  async create(barbershopData: CreateBarbershopDto): Promise<void> {
    const { name, phone, cnpj, address, adminId } = barbershopData;

    const addressId: number = await this.locationService.createAddress(address);

    await this.barbershopRepository.create({
      name,
      phone,
      cnpj,
      addressId,
      adminId,
    });
  }

  findAll() {
    return `This action returns all barbershop`;
  }

  async findOne(id: number): Promise<Barbershop> {
    const barbershop = await this.barbershopRepository.findOne(id);

    if (!barbershop) {
      throw new NotFoundException('Faio');
    }

    return barbershop;
  }

  update(id: number) {
    return `This action updates a #${id} barbershop`;
  }

  remove(id: number) {
    return `This action removes a #${id} barbershop`;
  }
}

export class AgendamentoService {
  constructor(private readonly prisma: PrismaService) {}

  async createAgendamento(data: any) {
    return await this.prisma.agendamento.create({
      data,
    });
  }
}
