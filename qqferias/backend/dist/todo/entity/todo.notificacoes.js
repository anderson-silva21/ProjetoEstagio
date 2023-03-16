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
exports.NotificacoesEntity = void 0;
const typeorm_1 = require("typeorm");
let NotificacoesEntity = class NotificacoesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'uuid', type: 'int' }),
    __metadata("design:type", Number)
], NotificacoesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], NotificacoesEntity.prototype, "agendamento_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum' }),
    __metadata("design:type", String)
], NotificacoesEntity.prototype, "tipo", void 0);
NotificacoesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'notificacoes' })
], NotificacoesEntity);
exports.NotificacoesEntity = NotificacoesEntity;
//# sourceMappingURL=todo.notificacoes.js.map