import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevModule } from './dev/dev.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dev } from './dev/entities/dev.entity';

@Module({
  imports: [DevModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'teste2024',
    password: 'root',
    entities: [Dev],
    synchronize: true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
