import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RegionModule } from './region/region.module';
import { ConfigModule } from '@nestjs/config';
import { UploadImageModule } from './upload-image/upload-image.module';
import { CloudinaryModule } from 'nestjs-cloudinary';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    PrismaModule,
    RegionModule,
    ConfigModule.forRoot(),
    UploadImageModule,
    CloudinaryModule.forRootAsync({
      useFactory: () => ({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      }),
    }),
    AuthModule,
    MailModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '50m' },
    }),
    UserModule,
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}