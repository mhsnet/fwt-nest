import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOneByToken(token: string): string {
    return 'Hello World!';
  }
}
