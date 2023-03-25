import { AuthService } from './shared/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login({ matricula, senha }: {
        matricula: any;
        senha: any;
    }): Promise<{
        token: {
            access_token: string;
        };
        user: {
            user: import("../db/entity/funcionarios.entity").Funcionarios;
        };
    }>;
}
