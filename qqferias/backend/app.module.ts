import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('DB_HOST', 'qqtech4.crqc50gxdjpu.sa-east-1.rds.amazonaws.com'), 
        port: Number(ConfigService.get('DB_PORT', 5432)),
        username: ConfigService.get('DB_USERNAME','980166'),
        password: ConfigService.get('DB_PASSWORD','980166'),
        database: ConfigService.get('DB_NAME','980166'),
        schema: ConfigService.get('DB_SCHEMA','qqferias'),
        entities: [__dirname + '/**/*.entity{.js,.ts}'],
        synchronize: true,
      })
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
