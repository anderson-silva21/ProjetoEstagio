import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'compromissos'})
export class CompromissosEntity {
    @PrimaryGeneratedColumn({name:'uuid', type:'int'})
    id: number;

    @Column({type:'int'})
    agendamento_id: number;

    @Column({type: 'enum' })
    tipo: Enumerator;
}