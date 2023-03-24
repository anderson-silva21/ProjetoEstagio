import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private authService: AuthService) {
        super( {
            usernameField: 'matricula',
            passwordField: 'senha',
        });
    }

    async validate(matricula: any, senha: any): Promise<any> {
        const user = await this.authService.validadeUser(matricula, senha);
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }

}