import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, IsNumber, IsInt } from 'class-validator';

export class UpdateBookDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(1, 200)
  title?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(10, 2000)
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsInt()
  publicationYear?: number;
}