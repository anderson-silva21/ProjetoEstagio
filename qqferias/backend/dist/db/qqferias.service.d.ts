import { Repository } from 'typeorm';
import { createAgendamentos } from './dto/create-agendamentos.dto';
import { createCompromissos } from './dto/create-compromissos.dto';
import { createFuncionarios } from './dto/create-funcionarios.dto';
import { createNotificacoes } from './dto/create-notificacoes.dto';
import { updateAgendamentos } from './dto/update-agendamentos.dto';
import { updateCompromissos } from './dto/update-compromissos.dto';
import { updateFuncionarios } from './dto/update-funcionarios.dto';
import { updateNotificacoes } from './dto/update-notificacoes.dto';
import { Agendamentos, Stat } from './entity/agendamentos.entity';
import { Compromissos } from './entity/compromissos.entity';
import { Funcionarios, Func } from './entity/funcionarios.entity';
import { Notificacoes } from './entity/notificacoes.entity';
export declare class QQFeriasService {
    private readonly agendamentosRepository;
    private readonly compromissosRepository;
    private readonly funcionariosRepository;
    private readonly notificacoesRepository;
    [x: string]: any;
    findById(sub: string): void;
    findByEmail(email: string): void;
    constructor(agendamentosRepository: Repository<Agendamentos>, compromissosRepository: Repository<Compromissos>, funcionariosRepository: Repository<Funcionarios>, notificacoesRepository: Repository<Notificacoes>);
    funcionariosFindAll(): Promise<Funcionarios[]>;
    agendamentosFindAll(): Promise<Agendamentos[]>;
    compromissosFindAll(): Promise<Compromissos[]>;
    notificacoesFindAll(): Promise<Notificacoes[]>;
    funcionariosFindOne(id: any): Promise<Funcionarios>;
    updateAgendamentoStatus(id: number, status: string): Promise<{
        id: number;
        funcionario_id: number;
        data_inicio: Date;
        data_fim: Date;
        dias: number;
        status: Stat;
        antecipacao_13_salario: boolean;
        gestor_id: number;
    } & Agendamentos>;
    getAgendamentosByGestorId(gestorId: number): Promise<Agendamentos[]>;
    getFuncionariosByGestorId(gestorId: number): Promise<Funcionarios[]>;
    getFuncionariosByGestorIdDois(id: number): Promise<Funcionarios[]>;
    login(matricula: any, senha: any): Promise<{
        user: Funcionarios;
    }>;
    findGestores(): Promise<Funcionarios[]>;
    userProfileFindOne(id: any): Promise<Func>;
    agendamentosFindOne(id: any): Promise<Agendamentos>;
    getAgendamentosAprovadosById(id: number): Promise<Agendamentos[]>;
    compromissosFindOne(id: any): Promise<Compromissos>;
    notificacoesFindOne(id: any): Promise<Notificacoes>;
    agendamentosCreate(data: createAgendamentos): Promise<Agendamentos>;
    funcionariosCreate(data: createFuncionarios): Promise<Funcionarios>;
    noticacoesCreate(data: createNotificacoes): Promise<Notificacoes>;
    compromissosCreate(data: createCompromissos): Promise<Compromissos>;
    agendamentosUpdate(id: number, data: updateAgendamentos): Promise<Agendamentos>;
    funcionariosUpdate(id: number, data: updateFuncionarios): Promise<Funcionarios>;
    compromissosUpdate(id: number, data: updateCompromissos): Promise<Compromissos>;
    notificacoesUpdate(id: number, data: updateNotificacoes): Promise<Notificacoes>;
    agendamentosDeleteById(id: number): Promise<void>;
    compromissosDeleteById(id: number): Promise<void>;
    funcionariosDeleteById(id: number): Promise<void>;
    notificacoesDeleteById(id: number): Promise<void>;
}
