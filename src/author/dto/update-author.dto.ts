import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, IsDate } from 'class-validator';

export class UpdateAuthorDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2, 100)
  name?: string;

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