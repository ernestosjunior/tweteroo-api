import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';

@Controller('sign-up')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }
}
