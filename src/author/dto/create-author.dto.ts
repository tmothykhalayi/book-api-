import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsOptional, IsDate } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 1000)
  bio?: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  birthDate?: Date;
}