import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

// import { PrismaClient } from '@prisma/client';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PrismaService extends PrismaClient {
//   constructor() {
//     super();
//   }
// }