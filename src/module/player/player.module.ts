import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from '../../entity/player/player.entity';
import { PlayerController } from '../../controller/player/player.controller';
import { PlayerService } from '../../service/player/player.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
