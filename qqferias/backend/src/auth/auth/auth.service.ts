import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Funcionarios } from '../../db/entity/funcionarios.entity';
import { QQFeriasService } from '../../db/qqferias.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: QQFeriasService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: JwtPayload): Promise<Funcionarios | null> {
    const user = await this.QQFeriasService.findById(payload.sub);
    if (user && user.isActive) {
      return user;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.QQFeriasService.findByEmail(email);
    if (!user) {
      return null;
    }
    const isPasswordMatched = await compare(password, user.password);
    if (!isPasswordMatched) {
      return null;
    }
    const payload: JwtPayload = { sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
