"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QqferiasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const qqferias_agendamentos_1 = require("./entity/qqferias.agendamentos");
const qqferias_compromissos_1 = require("./entity/qqferias.compromissos");
const qqferias_funcionarios_1 = require("./entity/qqferias.funcionarios");
const qqferias_notificacoes_1 = require("./entity/qqferias.notificacoes");
const qqferias_controller_1 = require("./qqferias.controller");
const qqferias_service_1 = require("./qqferias.service");
let QqferiasModule = class QqferiasModule {
};
QqferiasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                qqferias_agendamentos_1.QQferiasAgendamentos, qqferias_compromissos_1.QQferiasCompromissos, qqferias_funcionarios_1.QQferiasFuncionarios, qqferias_notificacoes_1.QQferiasNotificacoes
            ])],
        controllers: [qqferias_controller_1.QqferiasController],
        providers: [qqferias_service_1.QqferiasService],
        exports: [qqferias_service_1.QqferiasService],
    })
], QqferiasModule);
exports.QqferiasModule = QqferiasModule;
//# sourceMappingURL=qqferias.module.js.map