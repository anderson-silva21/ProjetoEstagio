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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QQFeriasController = void 0;
const common_1 = require("@nestjs/common");
const create_agendamentos_dto_1 = require("./dto/create-agendamentos.dto");
const create_compromissos_dto_1 = require("./dto/create-compromissos.dto");
const create_funcionarios_dto_1 = require("./dto/create-funcionarios.dto");
const create_notificacoes_dto_1 = require("./dto/create-notificacoes.dto");
const update_agendamentos_dto_1 = require("./dto/update-agendamentos.dto");
const update_compromissos_dto_1 = require("./dto/update-compromissos.dto");
const update_funcionarios_dto_1 = require("./dto/update-funcionarios.dto");
const update_notificacoes_dto_1 = require("./dto/update-notificacoes.dto");
const qqferias_service_1 = require("./qqferias.service");
let QQFeriasController = class QQFeriasController {
    constructor(QQFeriasService) {
        this.QQFeriasService = QQFeriasService;
    }
    async indexAgendamentos() {
        return await this.QQFeriasService.agendamentosFindAll();
    }
    async getAgendamentosFuncionariosByGestorId(id) {
        const agendamentos = await this.QQFeriasService.getAgendamentosByGestorId(id);
        const funcionarios = await this.QQFeriasService.getFuncionariosByGestorId(id);
        return {
            agendamentos,
            funcionarios,
        };
    }
    async indexFuncionarios() {
        return await this.QQFeriasService.funcionariosFindAll();
    }
    async login(credentials) {
        return await this.QQFeriasService.login(credentials.matricula, credentials.senha);
    }
    async userProfile(id) {
        return await this.QQFeriasService.userProfileFindOne(id);
    }
    async indexCompromissos() {
        return await this.QQFeriasService.compromissosFindAll();
    }
    async indexNotificacoes() {
        return await this.QQFeriasService.notificacoesFindAll();
    }
    async createAgendamentos(body) {
        return await this.QQFeriasService.agendamentosCreate(body);
    }
    async createFuncionarios(body) {
        return await this.QQFeriasService.funcionariosCreate(body);
    }
    async createCompromissos(body) {
        return await this.QQFeriasService.compromissosCreate(body);
    }
    async createNotificacoes(body) {
        return await this.QQFeriasService.noticacoesCreate(body);
    }
    async agendamentoShow(id) {
        return await this.QQFeriasService.agendamentosFindOne(id);
    }
    async getAgendamentosAprovadosById(id) {
        return await this.QQFeriasService.getAgendamentosAprovadosById(id);
    }
    async gestoresShow() {
        const gestores = await this.QQFeriasService.findGestores();
        return gestores;
    }
    async funcionarioShow(id) {
        return await this.QQFeriasService.funcionariosFindOne(id);
    }
    async getFuncionariosByGestorId(id) {
        return await this.QQFeriasService.getFuncionariosByGestorIdDois(id);
    }
    async compromissosShow(id) {
        return await this.QQFeriasService.compromissosFindOne(id);
    }
    async notificacoesShow(id) {
        return await this.QQFeriasService.notificacoesFindOne(id);
    }
    async agendamentosUpdate(id, body) {
        return await this.QQFeriasService.agendamentosUpdate(id, body);
    }
    async updateAgendamentoStatus(id, body) {
        return await this.QQFeriasService.updateAgendamentoStatus(id, body.status);
    }
    async funcionariosUpdate(id, body) {
        return await this.QQFeriasService.funcionariosUpdate(id, body);
    }
    async compromissosUpdate(id, body) {
        return await this.QQFeriasService.compromissosUpdate(id, body);
    }
    async notificacoesUpdate(id, body) {
        return await this.QQFeriasService.notificacoesUpdate(id, body);
    }
    async agendamentosDestroy(id) {
        await this.QQFeriasService.agendamentosDeleteById(id);
    }
    async funcionariosDestroy(id) {
        await this.QQFeriasService.funcionariosDeleteById(id);
    }
    async compromissosDestroy(id) {
        await this.QQFeriasService.compromissosDeleteById(id);
    }
    async notificacoesDestroy(id) {
        await this.QQFeriasService.notificacoesDeleteById(id);
    }
};
__decorate([
    (0, common_1.Get)('agendamentos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "indexAgendamentos", null);
__decorate([
    (0, common_1.Get)('gestores/:id/agendamentos-funcionarios'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "getAgendamentosFuncionariosByGestorId", null);
__decorate([
    (0, common_1.Get)('funcionarios'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "indexFuncionarios", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('userProfile'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "userProfile", null);
__decorate([
    (0, common_1.Get)('compromissos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "indexCompromissos", null);
__decorate([
    (0, common_1.Get)('notificacoes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "indexNotificacoes", null);
__decorate([
    (0, common_1.Post)('agendamentos/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agendamentos_dto_1.createAgendamentos]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "createAgendamentos", null);
__decorate([
    (0, common_1.Post)('funcionarios/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_funcionarios_dto_1.createFuncionarios]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "createFuncionarios", null);
__decorate([
    (0, common_1.Post)('compromissos/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_compromissos_dto_1.createCompromissos]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "createCompromissos", null);
__decorate([
    (0, common_1.Post)('notificacoes/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notificacoes_dto_1.createNotificacoes]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "createNotificacoes", null);
__decorate([
    (0, common_1.Get)('agendamentos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "agendamentoShow", null);
__decorate([
    (0, common_1.Get)('agendamentos/:id/aprovados'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "getAgendamentosAprovadosById", null);
__decorate([
    (0, common_1.Get)('gestores'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "gestoresShow", null);
__decorate([
    (0, common_1.Get)('funcionarios/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "funcionarioShow", null);
__decorate([
    (0, common_1.Get)('gestores/:id/funcionarios'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "getFuncionariosByGestorId", null);
__decorate([
    (0, common_1.Get)('compromissos/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "compromissosShow", null);
__decorate([
    (0, common_1.Get)('notificacoes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "notificacoesShow", null);
__decorate([
    (0, common_1.Put)('agendamentos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_agendamentos_dto_1.updateAgendamentos]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "agendamentosUpdate", null);
__decorate([
    (0, common_1.Put)('agendamentos/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "updateAgendamentoStatus", null);
__decorate([
    (0, common_1.Put)('funcionarios/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_funcionarios_dto_1.updateFuncionarios]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "funcionariosUpdate", null);
__decorate([
    (0, common_1.Put)('compromissos/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_compromissos_dto_1.updateCompromissos]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "compromissosUpdate", null);
__decorate([
    (0, common_1.Put)('notificacoes/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_notificacoes_dto_1.updateNotificacoes]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "notificacoesUpdate", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "agendamentosDestroy", null);
__decorate([
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "funcionariosDestroy", null);
__decorate([
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "compromissosDestroy", null);
__decorate([
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQFeriasController.prototype, "notificacoesDestroy", null);
QQFeriasController = __decorate([
    (0, common_1.Controller)('qqferias'),
    __metadata("design:paramtypes", [qqferias_service_1.QQFeriasService])
], QQFeriasController);
exports.QQFeriasController = QQFeriasController;
//# sourceMappingURL=qqferias.controller.js.map