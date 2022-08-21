import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { Tweet } from './tweet';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  async getAll(): Promise<Tweet[]> {
    return this.tweetsService.getAll();
  }

  @Post()
  async create(@Body() { username, tweet }: Tweet): Promise<Tweet | string> {
    if (!username || !tweet)
      throw new BadRequestException('Provide all fields. [username, tweet].');

    return this.tweetsService.create({ username, tweet });
  }
}
