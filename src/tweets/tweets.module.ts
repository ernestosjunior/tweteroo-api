import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet, TweetSchema } from './tweet';
import { TweetsService } from './tweets.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tweet.name,
        schema: TweetSchema,
      },
    ]),
  ],
  exports: [],
  controllers: [],
  providers: [TweetsService],
})
export class TweetsModule {}
