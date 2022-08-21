import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet } from './tweet';

@Injectable()
export class TweetsService {
  constructor(@InjectModel(Tweet.name) private tweetModel: Model<Tweet>) {}

  async getAll(): Promise<Tweet[]> {
    return this.tweetModel.find().exec();
  }

  async create(tweet: Tweet): Promise<Tweet> {
    const userCreated = new this.tweetModel(tweet);

    return userCreated.save();
  }
}
