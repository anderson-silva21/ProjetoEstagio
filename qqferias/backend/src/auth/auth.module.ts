import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { QQFeriasModule } from 'src/db/qqferias.module';
import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt-strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './shared/constants';
import { QQFeriasService } from 'src/db/qqferias.service';
import { Agendamentos } from 'src/db/entity/agendamentos.entity';
import { Compromissos } from 'src/db/entity/compromissos.entity';
import { Funcionarios } from 'src/db/entity/funcionarios.entity';
import { Notificacoes } from 'src/db/entity/notificacoes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
https://docs.nestjs.com/modules
*/

@Module({
  imports: [QQFeriasModule, PassportModule, 
            JwtModule.register({
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '1h'},
            }),
            TypeOrmModule.forFeature([
              Agendamentos, Compromissos, Funcionarios, Notificacoes
            ]),          
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, QQFeriasService, Agendamentos, Compromissos, Funcionarios, Notificacoes],
})
export class AuthModule {}
