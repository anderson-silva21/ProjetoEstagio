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
exports.QqferiasController = void 0;
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
let QqferiasController = class QqferiasController {
    constructor(QqferiasService) {
        this.QqferiasService = QqferiasService;
    }
    async indexAgendamentos() {
        return await this.QqferiasService.agendamentosFindAll();
    }
    async indexFuncionarios() {
        return await this.QqferiasService.funcionariosFindAll();
    }
    async indexCompromissos() {
        return await this.QqferiasService.compromissosFindAll();
    }
    async indexNotificacoes() {
        return await this.QqferiasService.notificacoesFindAll();
    }
    async createAgendamentos(body) {
        return await this.QqferiasService.agendamentosCreate(body);
    }
    async createFuncionarios(body) {
        return await this.QqferiasService.funcionariosCreate(body);
    }
    async createCompromissos(body) {
        return await this.QqferiasService.compromissosCreate(body);
    }
    async createNotificacoes(body) {
        return await this.QqferiasService.noticacoesCreate(body);
    }
    async agendamentoShow(id) {
        return await this.QqferiasService.agendamentosFindOne(id);
    }
    async funcionarioShow(id) {
        return await this.QqferiasService.funcionariosFindOne(id);
    }
    async compromissosShow(id) {
        return await this.QqferiasService.compromissosFindOne(id);
    }
    async notificacoesShow(id) {
        return await this.QqferiasService.notificacoesFindOne(id);
    }
    async agendamentosUpdate(id, body) {
        return await this.QqferiasService.agendamentosUpdate(id, body);
    }
    async funcionariosUpdate(id, body) {
        return await this.QqferiasService.funcionariosUpdate(id, body);
    }
    async compromissosUpdate(id, body) {
        return await this.QqferiasService.compromissosUpdate(id, body);
    }
    async notificacoesUpdate(id, body) {
        return await this.QqferiasService.notificacoesUpdate(id, body);
    }
    async agendamentosDestroy(id) {
        await this.QqferiasService.agendamentosDeleteById(id);
    }
    async funcionariosDestroy(id) {
        await this.QqferiasService.funcionariosDeleteById(id);
    }
    async compromissosDestroy(id) {
        await this.QqferiasService.compromissosDeleteById(id);
    }
    async notificacoesDestroy(id) {
        await this.QqferiasService.notificacoesDeleteById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "indexAgendamentos", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "indexFuncionarios", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "indexCompromissos", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "indexNotificacoes", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agendamentos_dto_1.createAgendamentos]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "createAgendamentos", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_funcionarios_dto_1.createFuncionarios]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "createFuncionarios", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_compromissos_dto_1.createCompromissos]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "createCompromissos", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notificacoes_dto_1.createNotificacoes]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "createNotificacoes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "agendamentoShow", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "funcionarioShow", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "compromissosShow", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "notificacoesShow", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_agendamentos_dto_1.updateAgendamentos]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "agendamentosUpdate", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_funcionarios_dto_1.updateFuncionarios]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "funcionariosUpdate", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_compromissos_dto_1.updateCompromissos]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "compromissosUpdate", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_notificacoes_dto_1.updateNotificacoes]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "notificacoesUpdate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "agendamentosDestroy", null);
__decorate([
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "funcionariosDestroy", null);
__decorate([
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "compromissosDestroy", null);
__decorate([
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QqferiasController.prototype, "notificacoesDestroy", null);
QqferiasController = __decorate([
    (0, common_1.Controller)('qqferias'),
    __metadata("design:paramtypes", [qqferias_service_1.QqferiasService])
], QqferiasController);
exports.QqferiasController = QqferiasController;
//# sourceMappingURL=qqferias.controller.js.map