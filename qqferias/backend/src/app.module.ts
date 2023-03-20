import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QQFeriasModule } from './db/qqferias.module';
import { Agendamentos } from './db/entity/agendamentos.entity';
import { Compromissos } from './db/entity/compromissos.entity';
import { Funcionarios } from './db/entity/funcionarios.entity';
import { Notificacoes } from './db/entity/notificacoes.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'qqtech4.crqc50gxdjpu.sa-east-1.rds.amazonaws.com'), 
        port: Number(configService.get('DB_PORT', 5432)),
        username: configService.get('DB_USERNAME','980166'),
        password: configService.get('DB_PASSWORD','980166'),
        database: configService.get('DB_NAME','980166'),   //C:\Users\980166\Desktop\Projeto Bê-á-Bá\qqferias-main-project\ProjetoEstagio\qqferias\backend\dist
        schema: configService.get('DB_SCHEMA','qqferias'), //C:\Users\980166\Desktop\Projeto Bê-á-Bá\qqferias-main-project\ProjetoEstagio\qqferias\backend\src\app.module.ts
        entities: [__dirname + '../dist/**/*.entity{.js,.ts}'],
        autoLoadEntities: true,
        synchronize: false,                              
      })
    }),
    QQFeriasModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}