import { Controller, Get, Post, Body } from '@nestjs/common';
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
  async create(@Body() tweet: Tweet): Promise<Tweet> {
    return this.tweetsService.create(tweet);
  }
}
