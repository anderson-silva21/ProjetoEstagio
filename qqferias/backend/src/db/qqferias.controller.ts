import { Body, Controller, Param, ParseUUIDPipe, Post, Put, Get, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { createAgendamentos } from './dto/create-agendamentos.dto';
import { createCompromissos } from './dto/create-compromissos.dto';
import { createFuncionarios } from './dto/create-funcionarios.dto';
import { createNotificacoes } from './dto/create-notificacoes.dto';
import { updateAgendamentos } from './dto/update-agendamentos.dto';
import { updateCompromissos } from './dto/update-compromissos.dto';
import { updateFuncionarios } from './dto/update-funcionarios.dto';
import { updateNotificacoes } from './dto/update-notificacoes.dto';
import { QQFeriasService } from './qqferias.service';

@Controller('qqferias')
export class QQFeriasController {

    constructor(private readonly QQFeriasService: QQFeriasService) {}

    @Get()
    async indexAgendamentos() {
        return await this.QQFeriasService.agendamentosFindAll();
    }

    @Get()
    async indexFuncionarios() {
        return await this.QQFeriasService.funcionariosFindAll();
    }

    @Get()
    async indexCompromissos() {
        return await this.QQFeriasService.compromissosFindAll();
    }

    @Get()
    async indexNotificacoes() {
        return await this.QQFeriasService.notificacoesFindAll();
    }

    @Post()
    async createAgendamentos(@Body() body: createAgendamentos) {
        return await this.QQFeriasService.agendamentosCreate(body);
    }

    @Post()
    async createFuncionarios(@Body() body: createFuncionarios) {
        return await this.QQFeriasService.funcionariosCreate(body);
    }

    @Post()
    async createCompromissos(@Body() body: createCompromissos) {
        return await this.QQFeriasService.compromissosCreate(body);
    }

    @Post()
    async createNotificacoes(@Body() body: createNotificacoes) {
        return await this.QQFeriasService.noticacoesCreate(body);
    }

    @Get(':id')
    async agendamentoShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.agendamentosFindOne(id);
    }

    @Get(':id')
    async funcionarioShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.funcionariosFindOne(id);
    }

    @Get(':id')
    async compromissosShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.compromissosFindOne(id);
    }

    @Get(':id')
    async notificacoesShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.notificacoesFindOne(id);
    }

    @Put(':id')
    async agendamentosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateAgendamentos) {
        return await this.QQFeriasService.agendamentosUpdate(id, body);
    }

    @Put(':id')
    async funcionariosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateFuncionarios) {
        return await this.QQFeriasService.funcionariosUpdate(id, body);
    }

    @Put(':id')
    async compromissosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateCompromissos) {
        return await this.QQFeriasService.compromissosUpdate(id, body);
    }

    @Put(':id')
    async notificacoesUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateNotificacoes) {
        return await this.QQFeriasService.notificacoesUpdate(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async agendamentosDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QQFeriasService.agendamentosDeleteById(id);
    }

    async funcionariosDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QQFeriasService.funcionariosDeleteById(id);
    }

    async compromissosDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QQFeriasService.compromissosDeleteById(id);
    }

    async notificacoesDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QQFeriasService.notificacoesDeleteById(id);
    }
}