import { Injectable, Dependencies, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
@Dependencies(UsersService, JwtService,ConfigService)
export class LoginService {

  constructor(private readonly usersService: UsersService, 
    private readonly jwtService: JwtService, 
    private readonly configService: ConfigService) {
  }

  async login(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.email, sub: user.boxname}
    const token = this.jwtService.sign(payload);
    const ret: any = {
      accessToken: token,
      boxConfig: {
        client_id: this.configService.get<string>('BOX_CLIENT_ID'),
        client_secret: this.configService.get<string>('BOX_CLIENT_SECRET'),
        enterprise_id: this.configService.get<string>('BOX_ENTERPRISE_ID'),
        api_endpoint: this.configService.get<string>('BOX_API_ENDPOINT'),
      },
      boxUser: {
        id: user.boxid,
        name: user.boxname,
        email: user.email
      }
    };
    return ret
  }
}