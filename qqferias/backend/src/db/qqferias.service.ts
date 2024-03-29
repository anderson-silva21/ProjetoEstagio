import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { STATUS_CODES } from 'http';
import { Repository, In} from 'typeorm';
import { createAgendamentos } from './dto/create-agendamentos.dto';
import { createCompromissos } from './dto/create-compromissos.dto';
import { createFuncionarios } from './dto/create-funcionarios.dto';
import { createNotificacoes } from './dto/create-notificacoes.dto';
import { updateAgendamentos } from './dto/update-agendamentos.dto';
import { updateCompromissos } from './dto/update-compromissos.dto';
import { updateFuncionarios } from './dto/update-funcionarios.dto';
import { updateNotificacoes } from './dto/update-notificacoes.dto'
import { Agendamentos, Stat } from './entity/agendamentos.entity';
import { Compromissos } from './entity/compromissos.entity';
import { Funcionarios, Func } from './entity/funcionarios.entity';
import { Notificacoes } from './entity/notificacoes.entity';

@Injectable()
export class QQFeriasService {
  [x: string]: any;
  findById(sub: string) {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string) {
    throw new Error('Method not implemented.');
  }
    
    constructor(
        @InjectRepository(Agendamentos)
        private readonly agendamentosRepository: Repository<Agendamentos>,

        @InjectRepository(Compromissos)
        private readonly compromissosRepository: Repository<Compromissos>,

        @InjectRepository(Funcionarios)
        private readonly funcionariosRepository: Repository<Funcionarios>,

        @InjectRepository(Notificacoes)
        private readonly notificacoesRepository: Repository<Notificacoes>,
        
        ){}

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
            try{
                return await this.funcionariosRepository.findOneOrFail(id);
            } catch (error){
                throw new NotFoundException(error.message);
            } 
        }

        async updateAgendamentoStatus(id: number, status: string){
            const agendamento = await this.agendamentosFindOne(id);
            console.log(status);
            if(!agendamento.hasOwnProperty('status') || typeof agendamento.status !== 'string'){
              throw new Error('Agendamento inválido');
            }
            switch (status) {
              case "Pendente":
              case "Aprovado":
              case "Reprovado":
                
                agendamento.status = status as Stat;
                
                break;
              default:
                throw new Error("Status inválido");
            }
            return await this.agendamentosRepository.save({ ...agendamento, id: agendamento.id });

          }
          
          
          
          

        async getAgendamentosByGestorId(gestorId: number) {
            return await this.agendamentosRepository.find({
              where: { gestor_id: gestorId }
            });
          }
          
          async getFuncionariosByGestorId(gestorId: number) {
            const agendamentos = await this.agendamentosRepository.find({
              where: { gestor_id: gestorId },
              select: ['funcionario_id'] // seleciona apenas a coluna 'funcionario_id'
            });
            const funcionarioIds = agendamentos.map((agendamento) => agendamento.funcionario_id);
            return await this.funcionariosRepository.find({
              where: { id: In(funcionarioIds) }
            });
          }

          async getFuncionariosByGestorIdDois(id: number){
            return await this.funcionariosRepository.find({ where: { gestorId: id}});
          }
          

        async login(matricula:any, senha: any) {
            const user = await this.funcionariosRepository.findOne({ where: { matricula: matricula, senha: senha } });
            if(!user){
                throw new NotFoundException('Funcionário não encontrado');
            }
            return {
                user:user, 
            };
          }

          async findGestores() {
            const gestores = await this.funcionariosRepository.find({
              where: { tipoFuncionario: Func.GESTOR }
            });
            return gestores;
          }

        async userProfileFindOne(id){
            try{
                const funcionario = await this.funcionariosRepository.findOne(id);
                if (!funcionario) {
                    throw new NotFoundException('Funcionário não encontrado');
                }
                return funcionario.tipoFuncionario;
            } catch (error){
                throw new NotFoundException(error.message);
            }
        }     

        async agendamentosFindOne(id) {
            try{
                return await this.agendamentosRepository.findOneOrFail({where: {id}});
            } catch (error){
                throw new NotFoundException(error.message);
            } 
        }
        
        async getAgendamentosAprovadosById(id: number) {
            const agendamentos = await this.agendamentosRepository.find({
              where: {
                funcionario_id: id,
                status: Stat.APROVADO,
              },
            });
            return agendamentos;
          }
          
 
        async compromissosFindOne(id) {
            try{
                return await this.compromissosRepository.findOneOrFail(id);
            } catch (error){
                throw new NotFoundException(error.message);
            } 
        }

        async notificacoesFindOne(id) {
          try {
              const notificacao = await this.notificacoesRepository.findOneOrFail({
                  where: { id }
              });
              console.log(notificacao); // Adicione esta linha
              return notificacao;
          } catch (error) {
              throw new NotFoundException(error.message);
          }
      }
      
      
        

        async agendamentosCreate(data: createAgendamentos){
            return await this.agendamentosRepository.save(this.agendamentosRepository.create(data));
        }

        async funcionariosCreate(data: createFuncionarios){
            return await this.funcionariosRepository.save(this.funcionariosRepository.create(data));
        }

        async noticacoesCreate(data: createNotificacoes){
            return await this.notificacoesRepository.save(this.notificacoesRepository.create(data));
        }

        async compromissosCreate(data: createCompromissos){
            return await this.compromissosRepository.save(this.compromissosRepository.create(data));
        }

        async agendamentosUpdate(id: number, data: updateAgendamentos) {
            const agendamento = await this.agendamentosFindOne(id);
            this.agendamentosRepository.merge(agendamento, data);
            return await this.agendamentosRepository.save(agendamento);
        }

        async funcionariosUpdate(id: number, data: updateFuncionarios) {
            const funcionario = await this.funcionariosFindOne(id);
            this.funcionariosRepository.merge(funcionario, data);
            return await this.funcionariosRepository.save(funcionario);
        }

        async compromissosUpdate(id: number, data: updateCompromissos) {
            const compromisso = await this.compromissosFindOne(id);
            this.compromissosRepository.merge(compromisso, data);
            return await this.compromissosRepository.save(compromisso);
        }

        async notificacoesUpdate(id: number, data: updateNotificacoes) {
            const notificacao = await this.notificacoesFindOne(id);
            this.notificacoesRepository.merge(notificacao, data);
            return await this.notificacoesRepository.save(notificacao);
        }

        async agendamentosDeleteById(id: number) {
            await this.agendamentosFindOne(id);
            await this.agendamentosRepository.softDelete(id);
        }

        async compromissosDeleteById(id: number) {
            await this.compromissosFindOne(id);
            await this.compromissosRepository.softDelete(id);
        }

        async funcionariosDeleteById(id: number) {
            await this.funcionariosFindOne(id);
            await this.funcionariosRepository.softDelete(id);
        }

        async notificacoesDeleteById(id: number) {
            await this.notificacoesFindOne(id);
            await this.notificacoesRepository.softDelete(id);
        }
}