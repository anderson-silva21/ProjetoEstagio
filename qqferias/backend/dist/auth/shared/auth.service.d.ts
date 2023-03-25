import { JwtService } from '@nestjs/jwt';
import { QQFeriasService } from 'src/db/qqferias.service';
export declare class AuthService {
    private QQFeriasService;
    private jwtService;
    constructor(QQFeriasService: QQFeriasService, jwtService: JwtService);
    validadeUser(matricula: any, senha: any): Promise<{
        token: {
            access_token: string;
        };
        user: {
            user: import("../../db/entity/funcionarios.entity").Funcionarios;
        };
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
