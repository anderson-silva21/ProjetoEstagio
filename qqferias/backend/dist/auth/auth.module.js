"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const auth_controller_1 = require("./auth.controller");
const common_1 = require("@nestjs/common");
const qqferias_module_1 = require("../db/qqferias.module");
const auth_service_1 = require("./shared/auth.service");
const local_strategy_1 = require("./shared/local.strategy");
const jwt_strategy_1 = require("./shared/jwt-strategy");
const dist_1 = require("@nestjs/jwt/dist");
const passport_1 = require("@nestjs/passport");
const constants_1 = require("./shared/constants");
const qqferias_service_1 = require("../db/qqferias.service");
const agendamentos_entity_1 = require("../db/entity/agendamentos.entity");
const compromissos_entity_1 = require("../db/entity/compromissos.entity");
const funcionarios_entity_1 = require("../db/entity/funcionarios.entity");
const notificacoes_entity_1 = require("../db/entity/notificacoes.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [qqferias_module_1.QQFeriasModule, passport_1.PassportModule,
            dist_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
            typeorm_1.TypeOrmModule.forFeature([
                agendamentos_entity_1.Agendamentos, compromissos_entity_1.Compromissos, funcionarios_entity_1.Funcionarios, notificacoes_entity_1.Notificacoes
            ]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, qqferias_service_1.QQFeriasService, agendamentos_entity_1.Agendamentos, compromissos_entity_1.Compromissos, funcionarios_entity_1.Funcionarios, notificacoes_entity_1.Notificacoes],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map