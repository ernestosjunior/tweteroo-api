import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async listAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async updateUser(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user).exec();
  }

  async deleteUser(id: string) {
    const userRemoved = this.userModel.findOneAndDelete({ _id: id }).exec();

    return (await userRemoved).remove();
  }
}
