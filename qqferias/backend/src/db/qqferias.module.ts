import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamentos } from './entity/agendamentos.entity';
import { Compromissos } from './entity/compromissos.entity';
import { Funcionarios } from './entity/funcionarios.entity';
import { Notificacoes } from './entity/notificacoes.entity';
import { QqferiasController } from './qqferias.controller';
import { QqferiasService } from './qqferias.service';

@Module({
  imports: [TypeOrmModule.forFeature([
              Agendamentos, Compromissos, Funcionarios, Notificacoes
            ])],
  controllers: [QqferiasController],
  providers: [QqferiasService],
  exports: [QqferiasService],
})
export class QQFeriasModule {}