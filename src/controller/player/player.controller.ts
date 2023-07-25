import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlayerService } from '../../service/player/player.service';
import { PlayerEntity } from '../../entity/player/player.entity';

@ApiTags('my_api')
@Controller('my_api')
export class PlayerController {
  constructor(private readonly playersService: PlayerService) {}

  @Post()
  create(@Body() playerEntity: PlayerEntity) {
    return this.playersService.create(playerEntity);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlayerEntity: PlayerEntity,
  ) {
    return this.playersService.update(id, updatePlayerEntity);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.delete(id);
  }
}
