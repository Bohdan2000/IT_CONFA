import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/users.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      console.log(createUserDto);
      return this.usersService.create(createUserDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }


  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

}
