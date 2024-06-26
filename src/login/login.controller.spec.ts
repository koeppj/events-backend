import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { Login } from './login';
import { LoginService } from './login.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

describe('LoginController', () => {
  let controller: LoginController;

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
      controllers: [LoginController],
      providers: [LoginService, UsersService, JwtService]
    }).compile();

    controller = module.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
