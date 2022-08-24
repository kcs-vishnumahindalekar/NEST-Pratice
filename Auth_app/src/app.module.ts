import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [ConfigModule.forRoot(),  
            ProductsModule,
            UserModule,
            MongooseModule.forRoot(process.env.DB_URI),
            AuthModule,
            ProfileModule, ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
