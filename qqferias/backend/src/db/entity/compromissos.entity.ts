import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'compromissos'})
export class Compromissos {
    @PrimaryGeneratedColumn({name:'uuid', type:'int'})
    id: number;

    @Column({type:'int'})
    agendamento_id: number;

    @Column({type: 'enum' })
    tipo: String;
}