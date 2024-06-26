import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    users: User[];

    constructor() {
        this.users = [
            new User('organizer','organizer@koeppster.net','password','34566306393')
        ]
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }
}
