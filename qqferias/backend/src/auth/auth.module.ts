import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { QQFeriasModule } from 'src/db/qqferias.module';
import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt-strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './shared/constants';

/*
https://docs.nestjs.com/modules
*/

@Module({
  imports: [QQFeriasModule, PassportModule, 
            JwtModule.register({
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '1h'},
            }),          
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
