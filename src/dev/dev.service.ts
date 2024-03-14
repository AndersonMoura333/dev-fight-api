import { Injectable } from '@nestjs/common';
import { CreateDevDto } from './dto/create-dev.dto';
import { UpdateDevDto } from './dto/update-dev.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dev } from './entities/dev.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DevService {
  constructor(
    @InjectRepository(Dev)
    private devsRepository: Repository<Dev>,
  ){}
  create(createDevDto: CreateDevDto) {
    return this.devsRepository.save(createDevDto);
  }

  findAll(): Promise<Dev[]> {
    return this.devsRepository.find();
  }

  findOne(id: string): Promise<Dev | null> {
    return this.devsRepository.findOneBy({id});
  }

  update(id: string, updateDevDto: UpdateDevDto) {
    return this.devsRepository.update(id, updateDevDto);
  }

  remove(id: string) {
    return this.devsRepository.delete(id);
  }
}
