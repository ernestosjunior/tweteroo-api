import { Controller, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.listAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() userUpdated: User,
  ): Promise<User> {
    return this.usersService.updateUser(id, userUpdated);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(id);
  }
}
