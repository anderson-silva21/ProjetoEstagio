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
exports.Funcionarios = void 0;
const typeorm_1 = require("typeorm");
let Funcionarios = class Funcionarios {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' }),
    __metadata("design:type", Number)
], Funcionarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ width: 100 }),
    __metadata("design:type", String)
], Funcionarios.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_contrato', type: 'enum' }),
    __metadata("design:type", String)
], Funcionarios.prototype, "tipoContrato", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_funcionario', type: 'enum' }),
    __metadata("design:type", String)
], Funcionarios.prototype, "tipoFuncionario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum' }),
    __metadata("design:type", String)
], Funcionarios.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data_ingresso', type: 'date' }),
    __metadata("design:type", Date)
], Funcionarios.prototype, "dataIngresso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gestor_id', type: 'int' }),
    __metadata("design:type", Number)
], Funcionarios.prototype, "gestorId", void 0);
Funcionarios = __decorate([
    (0, typeorm_1.Entity)({ name: 'funcionarios' })
], Funcionarios);
exports.Funcionarios = Funcionarios;
//# sourceMappingURL=funcionarios.entity.js.map