import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsNumber, IsInt } from 'class-validator';

export class CreateBookReviewDto {
  @ApiProperty()
  @IsString()
  @Length(10, 1000)
  content: string;

  @ApiProperty()
  @IsNumber()
  @IsInt()
  rating: number;
}