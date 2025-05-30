import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, IsDate } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 1000)
  bio?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location?: string;
}