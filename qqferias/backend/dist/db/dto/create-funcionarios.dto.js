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
exports.createFuncionarios = exports.Func = exports.Contrato = void 0;
const class_validator_1 = require("class-validator");
var Contrato;
(function (Contrato) {
    Contrato["CLT"] = "CLT";
    Contrato["PJ"] = "PJ";
    Contrato["GHOST"] = "Ghost";
})(Contrato = exports.Contrato || (exports.Contrato = {}));
var Func;
(function (Func) {
    Func["GESTOR"] = "Gestor";
    Func["COLABORADOR"] = "Colaborador";
    Func["GHOST"] = "Ghost";
})(Func = exports.Func || (exports.Func = {}));
class createFuncionarios {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createFuncionarios.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createFuncionarios.prototype, "matricula", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createFuncionarios.prototype, "tipoContrato", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], createFuncionarios.prototype, "tipoFuncionario", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], createFuncionarios.prototype, "dataIngresso", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], createFuncionarios.prototype, "gestorId", void 0);
exports.createFuncionarios = createFuncionarios;
//# sourceMappingURL=create-funcionarios.dto.js.map