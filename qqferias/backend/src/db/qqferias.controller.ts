import { Body, Controller, Param, ParseUUIDPipe, Post, Put, Get, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { createAgendamentos } from './dto/create-agendamentos.dto';
import { createCompromissos } from './dto/create-compromissos.dto';
import { createFuncionarios } from './dto/create-funcionarios.dto';
import { createNotificacoes } from './dto/create-notificacoes.dto';
import { updateAgendamentos } from './dto/update-agendamentos.dto';
import { updateCompromissos } from './dto/update-compromissos.dto';
import { updateFuncionarios } from './dto/update-funcionarios.dto';
import { updateNotificacoes } from './dto/update-notificacoes.dto';
import { QqferiasService } from './qqferias.service';

@Controller('qqferias')
export class QqferiasController {

    constructor(private readonly QqferiasService: QqferiasService) {}

    @Get()
    async indexAgendamentos() {
        return await this.QqferiasService.agendamentosFindAll();
    }

    @Get()
    async indexFuncionarios() {
        return await this.QqferiasService.funcionariosFindAll();
    }

    @Get()
    async indexCompromissos() {
        return await this.QqferiasService.compromissosFindAll();
    }

    @Get()
    async indexNotificacoes() {
        return await this.QqferiasService.notificacoesFindAll();
    }

    @Post()
    async createAgendamentos(@Body() body: createAgendamentos) {
        return await this.QqferiasService.agendamentosCreate(body);
    }

    @Post()
    async createFuncionarios(@Body() body: createFuncionarios) {
        return await this.QqferiasService.funcionariosCreate(body);
    }

    @Post()
    async createCompromissos(@Body() body: createCompromissos) {
        return await this.QqferiasService.compromissosCreate(body);
    }

    @Post()
    async createNotificacoes(@Body() body: createNotificacoes) {
        return await this.QqferiasService.noticacoesCreate(body);
    }

    @Get(':id')
    async agendamentoShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QqferiasService.agendamentosFindOne(id);
    }

    @Get(':id')
    async funcionarioShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QqferiasService.funcionariosFindOne(id);
    }

    @Get(':id')
    async compromissosShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QqferiasService.compromissosFindOne(id);
    }

    @Get(':id')
    async notificacoesShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QqferiasService.notificacoesFindOne(id);
    }

    @Put(':id')
    async agendamentosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateAgendamentos) {
        return await this.QqferiasService.agendamentosUpdate(id, body);
    }

    @Put(':id')
    async funcionariosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateFuncionarios) {
        return await this.QqferiasService.funcionariosUpdate(id, body);
    }

    @Put(':id')
    async compromissosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateCompromissos) {
        return await this.QqferiasService.compromissosUpdate(id, body);
    }

    @Put(':id')
    async notificacoesUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateNotificacoes) {
        return await this.QqferiasService.notificacoesUpdate(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async agendamentosDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QqferiasService.agendamentosDeleteById(id);
    }

    async funcionariosDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QqferiasService.funcionariosDeleteById(id);
    }

    async compromissosDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QqferiasService.compromissosDeleteById(id);
    }

    async notificacoesDestroy(@Param('id', new ParseUUIDPipe()) id) {
        await this.QqferiasService.notificacoesDeleteById(id);
    }

}
