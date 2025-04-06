import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Chevrolet Tracker' })
  name: string;

  @ApiProperty({
    example:
      'Chevrolet Tracker - zamonaviy va shinam. Yo’ldagi ishonchlilik va sport uyg’unligi. Bu ixcham krossover sizning yo’ldagi sarguzashtlaringiz uchun qulayliklar va katta imkoniyatlar taqdim etadi. Sport va xayratlanarli darajadagi ichki qism, yuqori darajadagi xafsizlik bilan birga shahringizni xar bir burchagini o’rganib chiqishda Tracker yo’nalishingizni tanlashingizda yordam beradi.',
  })
  description: string;

  @ApiProperty({ type: Number, example: 22000000 })
  price: number;

  @ApiProperty({ example: 'black' })
  color: string;

  @ApiProperty({ example: '506cd43d-bb49-4075-a675-06f6ccfac066' })
  categoryId: string;

  @ApiProperty({
    example:
      'http://res.cloudinary.com/dnle8xg73/image/upload/v1743976297/ccsjlhxdngxcasficoi6.webp',
  })
  image: string;
}
