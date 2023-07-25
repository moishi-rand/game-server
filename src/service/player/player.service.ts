import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from '../../entity/player/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playersRepository: Repository<PlayerEntity>,
  ) {}

  create(player: PlayerEntity) {
    return this.playersRepository.save(player);
  }

  findAll() {
    return this.playersRepository.find();
  }

  findOne(id: number) {
    return this.playersRepository.findOne({ where: { id: id } });
  }

  async delete(id: number) {
    await this.playersRepository.delete(id);
  }

  async update(id: number, player: PlayerEntity) {
    await this.playersRepository.update(id, player);
  }
}
