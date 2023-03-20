import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'agendamentos'})
export class QQferiasAgendamentos {
    @PrimaryGeneratedColumn({name:'uuid', type:'int'})
    id: number;

    @Column({type: 'int'})
    funcionario_id: number;

    @Column({type: 'date' })
    data_inicio: Date;

    @Column({type: 'date' })
    data_fim: Date;

    @Column({type:'enum'})
    status: String;  

    @Column({type:'bool'})
    antecipacao_13_salario: boolean;
}