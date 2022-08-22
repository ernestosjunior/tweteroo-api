import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUserByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async create(user: User): Promise<User> {
    const userCreated = new this.userModel(user);

    return userCreated.save();
  }
}
