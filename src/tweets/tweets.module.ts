import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet, TweetSchema } from './tweet';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { UsersService } from '../users/users.service';
import { User, UserSchema } from '../users/user';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tweet.name,
        schema: TweetSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  exports: [],
  controllers: [TweetsController],
  providers: [TweetsService, UsersService],
})
export class TweetsModule {}
