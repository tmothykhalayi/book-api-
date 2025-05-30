import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsNumber, IsInt } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  @Length(1, 200)
  title: string;

  @ApiProperty()
  @IsString()
  @Length(10, 2000)
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsInt()
  publicationYear: number;
}