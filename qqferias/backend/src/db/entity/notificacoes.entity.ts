import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Tipo {
    SOLICITACAO = 'Solicitacao',
    APROVACAO = 'Aprovacao',
    GHOST = 'Ghost'
}

@Entity({ name: 'notificacoes'})
export class Notificacoes {
    @PrimaryGeneratedColumn({name:'id', type:'int'})
    id: number;

    @Column({nullable: false, type:'int'})
    agendamento_id: number;

    @Column({nullable: false, type: 'enum', enum: Tipo, default: Tipo.GHOST })
    tipo: Tipo;  
}