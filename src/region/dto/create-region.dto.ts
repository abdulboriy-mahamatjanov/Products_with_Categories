import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRegionDto {
  @IsString({ message: "Region's Name must be a String" })
  @ApiProperty({ type: () => String, example: 'Tashkent' })
  name: string;
}
