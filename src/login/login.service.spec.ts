import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';
import { UsersService, } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: {
            expiresIn: '60s'
          },
        }),
      ],
      providers: [LoginService, UsersService, JwtService],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return a token', () => {
    expect(service.login('organizer@koeppster.net', 'password')).toHaveProperty('accessToken');
  });
});
