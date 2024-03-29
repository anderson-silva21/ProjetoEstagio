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
exports.createAgendamentos = exports.Stat = void 0;
const class_validator_1 = require("class-validator");
var Stat;
(function (Stat) {
    Stat["PENDENTE"] = "Pendente";
    Stat["APROVADO"] = "Aprovado";
    Stat["REPROVADO"] = "Reprovado";
    Stat["GHOST"] = "Ghost";
})(Stat = exports.Stat || (exports.Stat = {}));
class createAgendamentos {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createAgendamentos.prototype, "funcionario_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], createAgendamentos.prototype, "data_inicio", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], createAgendamentos.prototype, "data_fim", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createAgendamentos.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createAgendamentos.prototype, "dias", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], createAgendamentos.prototype, "antecipacao_13_salario", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createAgendamentos.prototype, "gestor_id", void 0);
exports.createAgendamentos = createAgendamentos;
//# sourceMappingURL=create-agendamentos.dto.js.map