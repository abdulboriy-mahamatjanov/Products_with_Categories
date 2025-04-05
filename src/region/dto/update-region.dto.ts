import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRegionDto } from './create-region.dto';
import { IsString } from 'class-validator';

export class UpdateRegionDto extends PartialType(CreateRegionDto) {
  @IsString({ message: "Region's Name must be a String" })
  @ApiProperty({ type: () => String, example: "Farg'ona" })
  name: string;
}
