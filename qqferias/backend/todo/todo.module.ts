import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentosEntity } from './entity/todo.agendamentos';
import { CompromissosEntity } from './entity/todo.compromissos';
import { FuncionarioEntity } from './entity/todo.funcionario';
import { NotificacoesEntity } from './entity/todo.notificacoes';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([FuncionarioEntity, AgendamentosEntity, NotificacoesEntity, CompromissosEntity])],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService],
})
export class TodoModule {}
