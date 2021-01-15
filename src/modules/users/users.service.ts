import { Model } from 'mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/users.interface';
import { CreateUserDto, UpdateUserDto, Roles } from './dto/users.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, role, email } = createUserDto;
    if (await this.getUserByEmail(email)) {
      throw new HttpException('This email already in use', 400)
    }
    createUserDto.password = await bcrypt.hash(password, 10);
    createUserDto.role = Roles[role];
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async delete(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }

  async update(updateUserDto: UpdateUserDto, id: string): Promise<User> {
    const user = await this.getUserById(id);
    if (!user) {
      throw new HttpException('User not found by provided id', 404);
    }
    const { password, email } = updateUserDto;
    if (await this.getUserByEmail(email)) {
      throw new HttpException('This email already in use', 400)
    }
    updateUserDto.password = await bcrypt.hash(password, 10);
    await this.userModel.updateOne({ _id: id }, updateUserDto);
    return this.getUserById(id);
  }

  async getUserById(_id: string) {
    return this.userModel.findOne({ _id });
  }

  async getUserByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
} 
