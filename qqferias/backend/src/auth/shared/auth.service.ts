/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { QQFeriasService } from 'src/db/qqferias.service';


@Injectable()
export class AuthService {

    constructor(
        private QQFeriasService: QQFeriasService,
        private jwtService: JwtService,
    ) { }

    async validadeUser(matricula: any, senha: any) {
        const user = await this.QQFeriasService.login(matricula, senha);
        if(!user){
            throw new NotFoundException('Funcionário não encontrado');
        }
        return {
            user:user, 
        };
    }

    async login(user: any){
        const payload = { sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
