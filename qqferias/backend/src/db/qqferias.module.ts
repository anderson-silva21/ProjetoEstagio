import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamentos } from './entity/agendamentos.entity';
import { Compromissos } from './entity/compromissos.entity';
import { Funcionarios } from './entity/funcionarios.entity';
import { Notificacoes } from './entity/notificacoes.entity';
import { QQFeriasController } from './qqferias.controller';
import { QQFeriasService } from './qqferias.service';

@Module({
  imports: [TypeOrmModule.forFeature([
              Agendamentos, Compromissos, Funcionarios, Notificacoes
            ])],
  controllers: [QQFeriasController],
  providers: [QQFeriasService],
  exports: [QQFeriasService],
})
export class QQFeriasModule {}