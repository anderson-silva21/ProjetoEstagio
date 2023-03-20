import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'funcionarios'})
export class QQferiasFuncionarios {
    @PrimaryGeneratedColumn({name:'id', type:'int'})
    id: number;

    @Column({width: 100})
    nome: string;

    @Column({name:'tipo_contrato', type: 'enum' })
    tipoContrato: String;

    @Column({name:'tipo_funcionario', type: 'enum' })
    tipoFuncionario: String;

    @Column({type: 'enum' })
    matricula: String;

    @Column({name:'data_ingresso', type:'date'})
    dataIngresso: Date;

    @Column({name:'gestor_id', type:'int'})
    gestorId: number;  
}