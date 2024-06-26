import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { BoxloginController } from './boxlogin/boxlogin.controller';
import { BoxloginService } from './boxlogin/boxlogin.service';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [LoginModule, UsersModule, ConfigModule.forRoot()],
  controllers: [AppController, LoginController, BoxloginController],
  providers: [AppService, LoginService, BoxloginService],
})
export class AppModule {}
