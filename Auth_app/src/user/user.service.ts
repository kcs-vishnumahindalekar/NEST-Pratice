import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './module/user.module';

@Injectable()
export class UserService {
    
    constructor(@InjectModel('Users') private readonly userModule: Model<User>){}


    get() {
        return this.userModule.find();
    }

    create(createUserDto: CreateUserDto) {
        const newUser = new this.userModule(createUserDto);
        return newUser.save(); 
    }

    async update(updateUserDto: UpdateUserDto, userId: string) {
        try{
            await this.userModule.findByIdAndUpdate(userId,updateUserDto)
            return {Message:"User Updated"}
        }catch(err){
            return err;
        }
        
    }

    async show(userId: string) {
        try{
            const user = await this.userModule.findById(userId);
            return user;
        }catch(err){
            return err;
        }
        
    }

    async delete(userId: string) {
        try{
            await this.userModule.findByIdAndDelete(userId);
            return {Message:"User Deleted"};
        }catch(err){
            return err;
        }
        
    }

    findByEmail(email: string) {
        return this.userModule.findOne({email});
    }
}
