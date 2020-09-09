import { Model } from 'mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Conference } from './interfaces/conferences.interface';
import { CreateConferenceDto, UpdateConferenceDto } from './dto/conferences.dto';


@Injectable()
export class ConferencesService {
  constructor(@InjectModel('Conference') private readonly conferenceModel: Model<Conference>) { }

  async create(createConferenceDto: CreateConferenceDto): Promise<Conference> {
    const createdConference = new this.conferenceModel(createConferenceDto);
    return createdConference.save();
  }

  async findAll(): Promise<Conference[]> {
    return this.conferenceModel.find().exec();
  }

  async delete(id: string) {
    return this.conferenceModel.findByIdAndRemove(id);
  }

  async update(updateConferenceDto: UpdateConferenceDto, id: string): Promise<Conference> {
    const conference = await this.getConferenceById(id);
    if (!conference) {
      throw new HttpException('Conference not found by provided id', 404);
    }
    await this.conferenceModel.updateOne({ _id: id }, updateConferenceDto);
    return this.getConferenceById(id);
  }

  async getConferenceById(_id: string) {
    return this.conferenceModel.findOne({ _id });
  }

} 
