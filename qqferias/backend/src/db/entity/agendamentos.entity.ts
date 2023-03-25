import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Stat {
    PENDENTE = 'Pendente',
    APROVADO = 'Aprovado',
    REPROVADO = 'Reprovado',
    GHOST = 'Ghost'
}

@Entity({name: 'agendamentos'})
export class Agendamentos {
    @PrimaryGeneratedColumn({name:'id', type:'int'})
    id: number;

    @Column({nullable: false, type: 'int'})
    funcionario_id: number;

    @Column({nullable: false, type: 'date' })
    data_inicio: Date;

    @Column({nullable: false, type: 'date' })
    data_fim: Date;

    @Column({nullable: false, type: 'int'})
    dias: number;

    @Column({nullable: false, type:'enum', enum: Stat, default: Stat.PENDENTE})
    status: Stat;  

    @Column({nullable: false, type:'bool', default: false})
    antecipacao_13_salario: boolean;

    @Column({nullable: false, type: 'int'})
    gestor_id: number;
}