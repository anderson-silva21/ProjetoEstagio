import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QQferiasAgendamentos } from './entity/qqferias.agendamentos';
import { QQferiasCompromissos } from './entity/qqferias.compromissos';
import { QQferiasFuncionarios } from './entity/qqferias.funcionarios';
import { QQferiasNotificacoes } from './entity/qqferias.notificacoes';
import { QqferiasController } from './qqferias.controller';
import { QqferiasService } from './qqferias.service';

@Module({
  imports: [TypeOrmModule.forFeature([
              QQferiasAgendamentos, QQferiasCompromissos, QQferiasFuncionarios, QQferiasNotificacoes
            ])],
  controllers: [QqferiasController],
  providers: [QqferiasService],
  exports: [QqferiasService],
})
export class QqferiasModule {}
