import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';

@Controller('sign-up')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() { username, avatar }: User): Promise<User> {
    if (!username || !avatar)
      throw new BadRequestException('Provide all fields. [username, avatar].');

    try {
      return this.usersService.create({ username, avatar });
    } catch (error) {
      return error.message;
    }
  }
}
