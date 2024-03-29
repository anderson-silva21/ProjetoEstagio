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
exports.Notificacoes = exports.Tipo = void 0;
const typeorm_1 = require("typeorm");
var Tipo;
(function (Tipo) {
    Tipo["SOLICITACAO"] = "Solicitacao";
    Tipo["APROVACAO"] = "Aprovacao";
    Tipo["GHOST"] = "Ghost";
})(Tipo = exports.Tipo || (exports.Tipo = {}));
let Notificacoes = class Notificacoes {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' }),
    __metadata("design:type", Number)
], Notificacoes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Notificacoes.prototype, "agendamento_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'enum', enum: Tipo, default: Tipo.GHOST }),
    __metadata("design:type", String)
], Notificacoes.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Notificacoes.prototype, "motivo", void 0);
Notificacoes = __decorate([
    (0, typeorm_1.Entity)({ name: 'notificacoes' })
], Notificacoes);
exports.Notificacoes = Notificacoes;
//# sourceMappingURL=notificacoes.entity.js.map