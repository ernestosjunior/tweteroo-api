import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet, TweetSchema } from './tweet';

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
  providers: [],
})
export class TweetsModule {}
