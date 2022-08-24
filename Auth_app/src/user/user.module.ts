import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './module/user.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],
  imports:[MongooseModule.forFeature([{name:'Users',schema:UserSchema}])]
})
export class UserModule {}
