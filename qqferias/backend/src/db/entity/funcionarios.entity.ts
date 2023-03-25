import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Contrato {
    CLT = 'CLT',
    PJ = 'PJ',
    GHOST = 'Ghost'
}

export enum Func {
    GESTOR = 'Gestor',
    COLABORADOR = 'Colaborador',
    GHOST = 'Ghost'
}

@Entity({ name: 'funcionarios'})
export class Funcionarios {
    @PrimaryGeneratedColumn({name:'id', type:'int'})
    id: number;

    @Column({nullable: false, length: 100})
    nome: string;

    @Column({nullable: false, length: 100})
    senha: string;

    @Column({nullable: false, length: 100})
    email: string;

    @Column({nullable: false, name:'tipo_contrato', type: 'enum', enum: Contrato, default: Contrato.GHOST})
    tipoContrato: Contrato;

    @Column({nullable: false, name:'tipo_funcionario', type: 'enum', enum: Func, default: Func.GHOST})
    tipoFuncionario: Func;

    @Column({nullable: false, length: 100})
    matricula: String;

    @Column({nullable: false, name:'data_ingresso', type:'date'})
    dataIngresso: Date;

    @Column({nullable: false, name:'gestor_id', type:'int'})
    gestorId: number;  
}