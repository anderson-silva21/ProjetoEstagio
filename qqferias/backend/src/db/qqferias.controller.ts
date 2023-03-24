import { Body, Controller, Param, ParseUUIDPipe, Post, Put, Get, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { createAgendamentos } from './dto/create-agendamentos.dto';
import { createCompromissos } from './dto/create-compromissos.dto';
import { createFuncionarios } from './dto/create-funcionarios.dto';
import { createNotificacoes } from './dto/create-notificacoes.dto';
import { updateAgendamentos } from './dto/update-agendamentos.dto';
import { updateCompromissos } from './dto/update-compromissos.dto';
import { updateFuncionarios } from './dto/update-funcionarios.dto';
import { updateNotificacoes } from './dto/update-notificacoes.dto';
import { QQFeriasService } from './qqferias.service';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('qqferias')
export class QQFeriasController {

    constructor(private readonly QQFeriasService: QQFeriasService) {}

    @UseGuards(JwtAuthGuard)
    @Get('agendamentos')
    async indexAgendamentos() {
        return await this.QQFeriasService.agendamentosFindAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('funcionarios')
    async indexFuncionarios() {
        return await this.QQFeriasService.funcionariosFindAll();
    }

   
    @Post('login')
    async login(@Body() credentials:any){
        return await this.QQFeriasService.login(credentials.matricula, credentials.senha);
    }

    @UseGuards(JwtAuthGuard)
    @Get('userProfile')
    async userProfile(@Param('id', new ParseUUIDPipe()) id){
        return await this.QQFeriasService.userProfileFindOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('compromissos')
    async indexCompromissos() {
        return await this.QQFeriasService.compromissosFindAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('notificacoes')
    async indexNotificacoes() {
        return await this.QQFeriasService.notificacoesFindAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('agendamentos/create')
    async createAgendamentos(@Body() body: createAgendamentos) {
        return await this.QQFeriasService.agendamentosCreate(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('funcionarios/create')
    async createFuncionarios(@Body() body: createFuncionarios) {
        return await this.QQFeriasService.funcionariosCreate(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('compromissos/create')
    async createCompromissos(@Body() body: createCompromissos) {
        return await this.QQFeriasService.compromissosCreate(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('notificacoes/create')
    async createNotificacoes(@Body() body: createNotificacoes) {
        return await this.QQFeriasService.noticacoesCreate(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get('agendamentos/:id')
    async agendamentoShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.agendamentosFindOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('gestores')
    async gestoresShow(){
        const gestores = await this.QQFeriasService.findGestores();
        return gestores;
    }

    @UseGuards(JwtAuthGuard)
    @Get('funcionarios/:id')
    async funcionarioShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.funcionariosFindOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('compromissos/:id')
    async compromissosShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.compromissosFindOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('notificacoes/:id')
    async notificacoesShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.notificacoesFindOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('agendamentos/:id')
    async agendamentosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateAgendamentos) {
        return await this.QQFeriasService.agendamentosUpdate(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Put('funcionarios/:id')
    async funcionariosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateFuncionarios) {
        return await this.QQFeriasService.funcionariosUpdate(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Put('compromissos/:id')
    async compromissosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateCompromissos) {
        return await this.QQFeriasService.compromissosUpdate(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Put('notificacoes/:id')
    async notificacoesUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateNotificacoes) {
        return await this.QQFeriasService.notificacoesUpdate(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
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