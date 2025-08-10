import { Injectable } from '@nestjs/common';
import { db } from '../db/db';
import { users } from '../db/schema/schema';

@Injectable()
export class UsersService {
  async create(data: { name: string; phone: string; email: string }) {
    await db.insert(users).values(data);
    return { message: 'User added successfully' };
  }

  async findAll() {
    return db.select().from(users);
  }
}
