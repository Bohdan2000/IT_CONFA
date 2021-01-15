import { Controller, Get, Post, Body, HttpCode, Delete, Param, Put } from '@nestjs/common';
import { ConferencesService } from './conferences.service';
import { Conference } from './interfaces/conferences.interface';
import { CreateConferenceDto, UpdateConferenceDto } from './dto/conferences.dto';


@Controller('conferences')
export class ConferencesController {
  constructor(private readonly conferencesService: ConferencesService) {}

  @Get()
  getAllConferences(): Promise<Conference[]> {
    return this.conferencesService.findAll();
  }

  @Post()
  @HttpCode(201)
  createConference(@Body() createConferenceDto: CreateConferenceDto): Promise<Conference> {
    try {
      return this.conferencesService.create(createConferenceDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Put(':id')
  updateConference(@Param('id') id: string, @Body() updateConferenceDto: UpdateConferenceDto): Promise<Conference> {
    try {
      return this.conferencesService.update(updateConferenceDto, id);
    } catch (err) {
      console.log(err);
    }
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.conferencesService.getConferenceById(id);
  }


  @Delete(':id')
  deleteConference(@Param('id') id: string) {
    return this.conferencesService.delete(id);
  }

}
