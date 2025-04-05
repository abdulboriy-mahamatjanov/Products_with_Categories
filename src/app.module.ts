import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RegionModule } from './region/region.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, RegionModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})

export class AppModule {}