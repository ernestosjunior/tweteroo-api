import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema()
export class Tweet {
  @Prop()
  username: string;

  @Prop()
  tweet: string;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
