import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet } from './tweet';
import { User } from '../users/user';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet.name) private tweetModel: Model<Tweet>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getAll(): Promise<any[]> {
    const tweets = await this.tweetModel.find();

    const data = [];

    for (const tweet of tweets) {
      const user = await this.userModel.findOne({ username: tweet.username });
      data.push({ user, tweet });
    }

    return data;
  }

  async create(tweet: Tweet): Promise<Tweet> {
    const userCreated = new this.tweetModel(tweet);

    return userCreated.save();
  }
}
