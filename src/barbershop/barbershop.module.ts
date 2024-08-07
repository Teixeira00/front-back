// import { Module } from '@nestjs/common';

// import { BarbershopService } from './barbershop.service';
// import { BarbershopController } from './barbershop.controller';

// import { BarbershopRepository } from './repositories/barbershopRepository';
// import { PrismaBarbershopRepository } from './repositories/prisma/prismaBarbershopRepository';

// import { PrismaService } from 'src/database/prisma.service';
// import { LocationModule } from 'src/location/location.module';
// import { LocationService } from 'src/location/location.service';

// @Module({
//   imports: [LocationModule],
//   controllers: [BarbershopController],
//   providers: [
//     BarbershopService,
//     PrismaService,
//     { provide: BarbershopRepository, useClass: PrismaBarbershopRepository },
//     LocationService,
//   ],
// })
// export class BarbershopModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { AgendamentoController } from '../agendamento/agendamento.controller';
import { AgendamentoService } from '../agendamento/agendamento.service';

@Module({
  controllers: [AgendamentoController],
  providers: [AgendamentoService, PrismaService],
})
export class AgendamentoModule {}
