import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QQFeriasModule } from './db/qqferias.module';


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
        database: configService.get('DB_NAME','980166'),
        schema: configService.get('DB_SCHEMA','qqferias'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        synchronize: true,                              
      })
    }),
    QQFeriasModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}