/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, UseGuards, Request, Post, Body } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthService } from './shared/auth.service';

@Controller()
export class AuthController {

    constructor(
        private authService: AuthService,
    ) {}


    @Post('auth/login')
    async login(@Body() {matricula, senha}){
        console.log("entrei no controller" + matricula);
        return this.authService.validadeUser(matricula, senha);
    }
}
