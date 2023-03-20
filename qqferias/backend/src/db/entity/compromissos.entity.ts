import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Tipo {
    PARTIDA = 'Partida',
    RETORNO = 'Retorno',
    GHOST = 'Ghost'
}

@Entity({ name: 'compromissos'})
export class Compromissos {
    @PrimaryGeneratedColumn({name:'id', type:'int'})
    id: number;

    @Column({nullable: false, type:'int'})
    agendamento_id: number;

    @Column({nullable: false, type: 'enum', enum: Tipo, default: Tipo.GHOST})
    tipo: Tipo;
}