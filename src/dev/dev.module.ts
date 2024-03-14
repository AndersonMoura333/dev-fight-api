import { Module } from '@nestjs/common';
import { DevService } from './dev.service';
import { DevController } from './dev.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dev } from './entities/dev.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Dev])
  ],
  controllers: [DevController],
  providers: [DevService],
})
export class DevModule {}
