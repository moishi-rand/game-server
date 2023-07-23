// src/players/players.module.ts
import { Module } from '@nestjs/common';
import { PlayerController } from '../../controller/player/player.controller';
import { PlayerService } from '../../service/player/player.service';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
