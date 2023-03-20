import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'notificacoes'})
export class Notificacoes {
    @PrimaryGeneratedColumn({name:'uuid', type:'int'})
    id: number;

    @Column({type:'int'})
    agendamento_id: number;

    @Column({type: 'enum' })
    tipo: String;  
}