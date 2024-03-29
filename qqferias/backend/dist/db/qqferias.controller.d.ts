import { createAgendamentos } from './dto/create-agendamentos.dto';
import { createCompromissos } from './dto/create-compromissos.dto';
import { createFuncionarios } from './dto/create-funcionarios.dto';
import { createNotificacoes } from './dto/create-notificacoes.dto';
import { updateAgendamentos } from './dto/update-agendamentos.dto';
import { updateCompromissos } from './dto/update-compromissos.dto';
import { updateFuncionarios } from './dto/update-funcionarios.dto';
import { updateNotificacoes } from './dto/update-notificacoes.dto';
import { QQFeriasService } from './qqferias.service';
export declare class QQFeriasController {
    private readonly QQFeriasService;
    constructor(QQFeriasService: QQFeriasService);
    indexAgendamentos(): Promise<import("./entity/agendamentos.entity").Agendamentos[]>;
    getAgendamentosFuncionariosByGestorId(id: number): Promise<{
        agendamentos: import("./entity/agendamentos.entity").Agendamentos[];
        funcionarios: import("./entity/funcionarios.entity").Funcionarios[];
    }>;
    indexFuncionarios(): Promise<import("./entity/funcionarios.entity").Funcionarios[]>;
    login(credentials: any): Promise<{
        user: import("./entity/funcionarios.entity").Funcionarios;
    }>;
    userProfile(id: any): Promise<import("./entity/funcionarios.entity").Func>;
    indexCompromissos(): Promise<import("./entity/compromissos.entity").Compromissos[]>;
    indexNotificacoes(): Promise<import("./entity/notificacoes.entity").Notificacoes[]>;
    createAgendamentos(body: createAgendamentos): Promise<import("./entity/agendamentos.entity").Agendamentos>;
    createFuncionarios(body: createFuncionarios): Promise<import("./entity/funcionarios.entity").Funcionarios>;
    createCompromissos(body: createCompromissos): Promise<import("./entity/compromissos.entity").Compromissos>;
    createNotificacoes(body: createNotificacoes): Promise<import("./entity/notificacoes.entity").Notificacoes>;
    agendamentoShow(id: any): Promise<import("./entity/agendamentos.entity").Agendamentos>;
    getAgendamentosAprovadosById(id: number): Promise<import("./entity/agendamentos.entity").Agendamentos[]>;
    gestoresShow(): Promise<import("./entity/funcionarios.entity").Funcionarios[]>;
    funcionarioShow(id: any): Promise<import("./entity/funcionarios.entity").Funcionarios>;
    getFuncionariosByGestorId(id: number): Promise<import("./entity/funcionarios.entity").Funcionarios[]>;
    compromissosShow(id: any): Promise<import("./entity/compromissos.entity").Compromissos>;
    notificacoesShow(id: any): Promise<import("./entity/notificacoes.entity").Notificacoes>;
    agendamentosUpdate(id: any, body: updateAgendamentos): Promise<import("./entity/agendamentos.entity").Agendamentos>;
    updateAgendamentoStatus(id: number, body: {
        status: string;
    }): Promise<{
        id: number;
        funcionario_id: number;
        data_inicio: Date;
        data_fim: Date;
        dias: number;
        status: import("./entity/agendamentos.entity").Stat;
        antecipacao_13_salario: boolean;
        gestor_id: number;
    } & import("./entity/agendamentos.entity").Agendamentos>;
    funcionariosUpdate(id: any, body: updateFuncionarios): Promise<import("./entity/funcionarios.entity").Funcionarios>;
    compromissosUpdate(id: any, body: updateCompromissos): Promise<import("./entity/compromissos.entity").Compromissos>;
    notificacoesUpdate(id: any, body: updateNotificacoes): Promise<import("./entity/notificacoes.entity").Notificacoes>;
    agendamentosDestroy(id: any): Promise<void>;
    funcionariosDestroy(id: any): Promise<void>;
    compromissosDestroy(id: any): Promise<void>;
    notificacoesDestroy(id: any): Promise<void>;
}
