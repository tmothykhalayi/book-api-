import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2, 50)
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 500)
  description?: string;
}