"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const todo_module_1 = require("./todo/todo.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (ConfigService) => ({
                    type: 'postgres',
                    host: ConfigService.get('DB_HOST', 'qqtech4.crqc50gxdjpu.sa-east-1.rds.amazonaws.com'),
                    port: Number(ConfigService.get('DB_PORT', 5432)),
                    username: ConfigService.get('DB_USERNAME', '980166'),
                    password: ConfigService.get('DB_PASSWORD', '980166'),
                    database: ConfigService.get('DB_NAME', '980166'),
                    schema: ConfigService.get('DB_SCHEMA', 'qqferias'),
                    entities: [__dirname + '/**/*.entity{.js,.ts}'],
                    synchronize: true,
                })
            }),
            todo_module_1.TodoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map