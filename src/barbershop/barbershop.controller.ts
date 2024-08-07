import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BarbershopService } from './barbershop.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { Barbershop } from './entities/barbershop.entity';
// import { FindOneBarbershopDto } from './dto/read-barbershop.dto';
// import { UpdateBarbershopDto } from './dto/update-barbershop.dto';

@Controller('barbershop')
export class BarbershopController {
  constructor(private readonly barbershopService: BarbershopService) {}

  @Post()
  create(@Body() body: CreateBarbershopDto): Promise<void> {
    return this.barbershopService.create(body);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Barbershop> {
    return this.barbershopService.findOne(id);
  }

  // @Get()
  // findAll() {
  //   return this.barbershopService.findAll();
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    // @Body() updateBarbershopDto: UpdateBarbershopDto,
  ) {
    return this.barbershopService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barbershopService.remove(+id);
  }
}
