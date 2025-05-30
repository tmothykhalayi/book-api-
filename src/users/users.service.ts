// users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId = 1;
//create a new user
  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.nextId++,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  //find all users
  findAll(): User[] {
    if (this.users.length === 0) {
      throw new NotFoundException('No users found');
    }
    return this.users;
  }

  //find a user by id
  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return user;
  }

  //update a user by id
  update(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);
    const updated = { ...user, ...updateUserDto };
    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = updated;
    return updated;
  }

  //remove a user by id
  delete(id: number): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException(`User with ID ${id} not found`);
    this.users.splice(index, 1);
  }
}
