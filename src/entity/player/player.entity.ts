import { IsNotEmpty, IsInt, IsString, Min } from 'class-validator';

export class PlayerEntity {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  score: number;
}