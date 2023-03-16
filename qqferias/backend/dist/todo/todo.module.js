"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_agendamentos_1 = require("./entity/todo.agendamentos");
const todo_compromissos_1 = require("./entity/todo.compromissos");
const todo_funcionario_1 = require("./entity/todo.funcionario");
const todo_notificacoes_1 = require("./entity/todo.notificacoes");
const todo_controller_1 = require("./todo.controller");
const todo_service_1 = require("./todo.service");
let TodoModule = class TodoModule {
};
TodoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([todo_funcionario_1.FuncionarioEntity, todo_agendamentos_1.AgendamentosEntity, todo_notificacoes_1.NotificacoesEntity, todo_compromissos_1.CompromissosEntity])],
        controllers: [todo_controller_1.TodoController],
        providers: [todo_service_1.TodoService],
        exports: [todo_service_1.TodoService],
    })
], TodoModule);
exports.TodoModule = TodoModule;
//# sourceMappingURL=todo.module.js.map