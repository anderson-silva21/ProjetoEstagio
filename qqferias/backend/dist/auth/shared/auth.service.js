"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const qqferias_service_1 = require("../../db/qqferias.service");
let AuthService = class AuthService {
    constructor(QQFeriasService, jwtService) {
        this.QQFeriasService = QQFeriasService;
        this.jwtService = jwtService;
    }
    async validadeUser(matricula, senha) {
        const user = await this.QQFeriasService.login(matricula, senha);
        if (!user) {
            throw new common_1.NotFoundException('Funcionário não encontrado');
        }
        const token = await this.login(user);
        console.log(user);
        return {
            token,
            user: user,
        };
    }
    async login(user) {
        return {
            access_token: this.jwtService.sign(user),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [qqferias_service_1.QQFeriasService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map