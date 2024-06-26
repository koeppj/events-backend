import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import {} from './login';
import { LoginService } from './login.service';
import { Login } from './login'

@Controller('/api/login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  login(@Body() login: Login) {
    return this.loginService.login(login.username, login.password);
  }
}

