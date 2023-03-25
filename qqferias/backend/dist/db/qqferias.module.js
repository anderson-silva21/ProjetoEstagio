"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QQFeriasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const agendamentos_entity_1 = require("./entity/agendamentos.entity");
const compromissos_entity_1 = require("./entity/compromissos.entity");
const funcionarios_entity_1 = require("./entity/funcionarios.entity");
const notificacoes_entity_1 = require("./entity/notificacoes.entity");
const qqferias_controller_1 = require("./qqferias.controller");
const qqferias_service_1 = require("./qqferias.service");
let QQFeriasModule = class QQFeriasModule {
};
QQFeriasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                agendamentos_entity_1.Agendamentos, compromissos_entity_1.Compromissos, funcionarios_entity_1.Funcionarios, notificacoes_entity_1.Notificacoes
            ])],
        controllers: [qqferias_controller_1.QQFeriasController],
        providers: [qqferias_service_1.QQFeriasService, agendamentos_entity_1.Agendamentos, compromissos_entity_1.Compromissos, funcionarios_entity_1.Funcionarios, notificacoes_entity_1.Notificacoes],
        exports: [qqferias_service_1.QQFeriasService, compromissos_entity_1.Compromissos, funcionarios_entity_1.Funcionarios, notificacoes_entity_1.Notificacoes, agendamentos_entity_1.Agendamentos],
    })
], QQFeriasModule);
exports.QQFeriasModule = QQFeriasModule;
//# sourceMappingURL=qqferias.module.js.map