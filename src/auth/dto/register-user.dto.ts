import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export enum UserRole {
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  USER = 'USER',
}

export class RegisterDto {
  @ApiProperty({ example: 'Alisher Sharipov' })
  @IsString({ message: 'FullName must be a string ❗' })
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: 'alishersharipov670@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'coder2o2' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '+998507525150' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ enum: UserRole, example: UserRole.USER })
  @IsString()
  @IsNotEmpty()
  role: UserRole;

  @ApiProperty({ example: '15e4713c-06cd-4a82-a78d-b6eb180dfedd' })
  @IsString({ message: "Region's ID must be a string ❗" })
  @IsNotEmpty()
  regionId: string;

  @ApiProperty({
    example:
      'http://res.cloudinary.com/dnle8xg73/image/upload/v1743929444/ysdk5yllutfbzdkfhrd1.jpg',
  })
  @IsString({ message: "Avatar's URL must be a string ❗" })
  @IsOptional()
  avatar: string;
}
