import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, Length } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2, 50)
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(8)
  password?: string;
}