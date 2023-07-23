import { Injectable } from '@nestjs/common';
import  { PlayerEntity } from '../../entity/player/player.entity';

@Injectable()
export class PlayerService{
  private players: PlayerEntity[] = [];

  create(player: PlayerEntity) {
    this.players.push(player);
  }

  findAll() {
    return this.players;
  }

  findOne(id: number) {
    return this.players.find(player => player.id === id);
  }

  delete(id: number) {
    this.players = this.players.filter(player => player.id !== id);
  }

  update(id: number, player: PlayerEntity) {
    const index = this.players.findIndex(existingPlayer => existingPlayer.id === id);
    if (index > -1) {
      this.players[index] = player;
    }
  }
}
