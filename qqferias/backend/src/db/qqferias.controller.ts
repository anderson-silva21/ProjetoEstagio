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

    
    @Get('agendamentos')
    async indexAgendamentos() {
        return await this.QQFeriasService.agendamentosFindAll();
    }

    @Get('gestores/:id/agendamentos-funcionarios')
    async getAgendamentosFuncionariosByGestorId(@Param('id') id: number) {
        const agendamentos = await this.QQFeriasService.getAgendamentosByGestorId(id);
        const funcionarios = await this.QQFeriasService.getFuncionariosByGestorId(id);
        
        return {
            agendamentos,
            funcionarios,
        };
    }

    
    @Get('funcionarios')
    async indexFuncionarios() {
        return await this.QQFeriasService.funcionariosFindAll();
    }

   
    @Post('login')
    async login(@Body() credentials:any){
        return await this.QQFeriasService.login(credentials.matricula, credentials.senha);
    }

    
    @Get('userProfile')
    async userProfile(@Param('id', new ParseUUIDPipe()) id){
        return await this.QQFeriasService.userProfileFindOne(id);
    }

    
    @Get('compromissos')
    async indexCompromissos() {
        return await this.QQFeriasService.compromissosFindAll();
    }

    
    @Get('notificacoes')
    async indexNotificacoes() {
        return await this.QQFeriasService.notificacoesFindAll();
    }

    
    @Post('agendamentos/create')
    async createAgendamentos(@Body() body: createAgendamentos) {
        return await this.QQFeriasService.agendamentosCreate(body);
    }

   
    @Post('funcionarios/create')
    async createFuncionarios(@Body() body: createFuncionarios) {
        return await this.QQFeriasService.funcionariosCreate(body);
    }

    
    @Post('compromissos/create')
    async createCompromissos(@Body() body: createCompromissos) {
        return await this.QQFeriasService.compromissosCreate(body);
    }

    
    @Post('notificacoes/create')
    async createNotificacoes(@Body() body: createNotificacoes) {
        return await this.QQFeriasService.noticacoesCreate(body);
    }

    
    @Get('agendamentos/:id')
    async agendamentoShow(@Param('id', new ParseUUIDPipe()) id) {
        
        return await this.QQFeriasService.agendamentosFindOne(id);
    }   

    
    @Get('gestores')
    async gestoresShow(){
        const gestores = await this.QQFeriasService.findGestores();
        return gestores;
    }

    
    @Get('funcionarios/:id')
    async funcionarioShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.funcionariosFindOne(id);
    }

    @Get('gestores/:id/funcionarios')
  async getFuncionariosByGestorId(@Param('id') id: number) {
    return await this.QQFeriasService.getFuncionariosByGestorIdDois(id);
  }

    
    @Get('compromissos/:id')
    async compromissosShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.compromissosFindOne(id);
    }

    
    @Get('notificacoes/:id')
    async notificacoesShow(@Param('id', new ParseUUIDPipe()) id) {
        return await this.QQFeriasService.notificacoesFindOne(id);
    }

    
    @Put('agendamentos/:id')
    async agendamentosUpdate(@Param('id') id, @Body() body: updateAgendamentos) {
        return await this.QQFeriasService.agendamentosUpdate(id, body);
    }

    @Put('agendamentos/:id/status')
    async updateAgendamentoStatus(
        @Param('id') id: number,
        @Body() body: { status: string }
    ) {
        return await this.QQFeriasService.updateAgendamentoStatus(id, body.status);
    }


    
    @Put('funcionarios/:id')
    async funcionariosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateFuncionarios) {
        return await this.QQFeriasService.funcionariosUpdate(id, body);
    }

    
    @Put('compromissos/:id')
    async compromissosUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateCompromissos) {
        return await this.QQFeriasService.compromissosUpdate(id, body);
    }

    
    @Put('notificacoes/:id')
    async notificacoesUpdate(@Param('id', new ParseUUIDPipe()) id, @Body() body: updateNotificacoes) {
        return await this.QQFeriasService.notificacoesUpdate(id, body);
    }

    
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