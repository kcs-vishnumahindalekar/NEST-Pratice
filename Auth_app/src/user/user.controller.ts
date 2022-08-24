import { Controller, Get,Post,Patch,Delete,Body,Param,ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}
    
    @Get()
    getUsers() {
        return this.userService.get();
    }

    @Post()
    store(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Patch('/:userId')
    update(
        @Body() updateUserDto: UpdateUserDto,
        @Param('userId') userId: string,
    ) {
        return this.userService.update(updateUserDto, userId);
    }

    @Get('/:userId')
    getUser(@Param('userId') userId: string) {
        return this.userService.show(userId);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId') userId: string) {
        return this.userService.delete(userId);
    }
}
