import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, IsNumber, IsInt } from 'class-validator';

export class UpdateBookReviewDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(10, 1000)
  content?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsInt()
  rating?: number;
}