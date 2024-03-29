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
exports.QQFeriasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const agendamentos_entity_1 = require("./entity/agendamentos.entity");
const compromissos_entity_1 = require("./entity/compromissos.entity");
const funcionarios_entity_1 = require("./entity/funcionarios.entity");
const notificacoes_entity_1 = require("./entity/notificacoes.entity");
let QQFeriasService = class QQFeriasService {
    findById(sub) {
        throw new Error('Method not implemented.');
    }
    findByEmail(email) {
        throw new Error('Method not implemented.');
    }
    constructor(agendamentosRepository, compromissosRepository, funcionariosRepository, notificacoesRepository) {
        this.agendamentosRepository = agendamentosRepository;
        this.compromissosRepository = compromissosRepository;
        this.funcionariosRepository = funcionariosRepository;
        this.notificacoesRepository = notificacoesRepository;
    }
    async funcionariosFindAll() {
        return await this.funcionariosRepository.find();
    }
    async agendamentosFindAll() {
        return await this.agendamentosRepository.find();
    }
    async compromissosFindAll() {
        return await this.compromissosRepository.find();
    }
    async notificacoesFindAll() {
        return await this.notificacoesRepository.find();
    }
    async funcionariosFindOne(id) {
        try {
            return await this.funcionariosRepository.findOneOrFail(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async updateAgendamentoStatus(id, status) {
        const agendamento = await this.agendamentosFindOne(id);
        console.log(status);
        if (!agendamento.hasOwnProperty('status') || typeof agendamento.status !== 'string') {
            throw new Error('Agendamento inválido');
        }
        switch (status) {
            case "Pendente":
            case "Aprovado":
            case "Reprovado":
                agendamento.status = status;
                break;
            default:
                throw new Error("Status inválido");
        }
        return await this.agendamentosRepository.save(Object.assign(Object.assign({}, agendamento), { id: agendamento.id }));
    }
    async getAgendamentosByGestorId(gestorId) {
        return await this.agendamentosRepository.find({
            where: { gestor_id: gestorId }
        });
    }
    async getFuncionariosByGestorId(gestorId) {
        const agendamentos = await this.agendamentosRepository.find({
            where: { gestor_id: gestorId },
            select: ['funcionario_id']
        });
        const funcionarioIds = agendamentos.map((agendamento) => agendamento.funcionario_id);
        return await this.funcionariosRepository.find({
            where: { id: (0, typeorm_2.In)(funcionarioIds) }
        });
    }
    async getFuncionariosByGestorIdDois(id) {
        return await this.funcionariosRepository.find({ where: { gestorId: id } });
    }
    async login(matricula, senha) {
        const user = await this.funcionariosRepository.findOne({ where: { matricula: matricula, senha: senha } });
        if (!user) {
            throw new common_1.NotFoundException('Funcionário não encontrado');
        }
        return {
            user: user,
        };
    }
    async findGestores() {
        const gestores = await this.funcionariosRepository.find({
            where: { tipoFuncionario: funcionarios_entity_1.Func.GESTOR }
        });
        return gestores;
    }
    async userProfileFindOne(id) {
        try {
            const funcionario = await this.funcionariosRepository.findOne(id);
            if (!funcionario) {
                throw new common_1.NotFoundException('Funcionário não encontrado');
            }
            return funcionario.tipoFuncionario;
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async agendamentosFindOne(id) {
        try {
            return await this.agendamentosRepository.findOneOrFail({ where: { id } });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async getAgendamentosAprovadosById(id) {
        const agendamentos = await this.agendamentosRepository.find({
            where: {
                funcionario_id: id,
                status: agendamentos_entity_1.Stat.APROVADO,
            },
        });
        return agendamentos;
    }
    async compromissosFindOne(id) {
        try {
            return await this.compromissosRepository.findOneOrFail(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async notificacoesFindOne(id) {
        try {
            const notificacao = await this.notificacoesRepository.findOneOrFail({
                where: { id }
            });
            console.log(notificacao);
            return notificacao;
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async agendamentosCreate(data) {
        return await this.agendamentosRepository.save(this.agendamentosRepository.create(data));
    }
    async funcionariosCreate(data) {
        return await this.funcionariosRepository.save(this.funcionariosRepository.create(data));
    }
    async noticacoesCreate(data) {
        return await this.notificacoesRepository.save(this.notificacoesRepository.create(data));
    }
    async compromissosCreate(data) {
        return await this.compromissosRepository.save(this.compromissosRepository.create(data));
    }
    async agendamentosUpdate(id, data) {
        const agendamento = await this.agendamentosFindOne(id);
        this.agendamentosRepository.merge(agendamento, data);
        return await this.agendamentosRepository.save(agendamento);
    }
    async funcionariosUpdate(id, data) {
        const funcionario = await this.funcionariosFindOne(id);
        this.funcionariosRepository.merge(funcionario, data);
        return await this.funcionariosRepository.save(funcionario);
    }
    async compromissosUpdate(id, data) {
        const compromisso = await this.compromissosFindOne(id);
        this.compromissosRepository.merge(compromisso, data);
        return await this.compromissosRepository.save(compromisso);
    }
    async notificacoesUpdate(id, data) {
        const notificacao = await this.notificacoesFindOne(id);
        this.notificacoesRepository.merge(notificacao, data);
        return await this.notificacoesRepository.save(notificacao);
    }
    async agendamentosDeleteById(id) {
        await this.agendamentosFindOne(id);
        await this.agendamentosRepository.softDelete(id);
    }
    async compromissosDeleteById(id) {
        await this.compromissosFindOne(id);
        await this.compromissosRepository.softDelete(id);
    }
    async funcionariosDeleteById(id) {
        await this.funcionariosFindOne(id);
        await this.funcionariosRepository.softDelete(id);
    }
    async notificacoesDeleteById(id) {
        await this.notificacoesFindOne(id);
        await this.notificacoesRepository.softDelete(id);
    }
};
QQFeriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(agendamentos_entity_1.Agendamentos)),
    __param(1, (0, typeorm_1.InjectRepository)(compromissos_entity_1.Compromissos)),
    __param(2, (0, typeorm_1.InjectRepository)(funcionarios_entity_1.Funcionarios)),
    __param(3, (0, typeorm_1.InjectRepository)(notificacoes_entity_1.Notificacoes)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], QQFeriasService);
exports.QQFeriasService = QQFeriasService;
//# sourceMappingURL=qqferias.service.js.map