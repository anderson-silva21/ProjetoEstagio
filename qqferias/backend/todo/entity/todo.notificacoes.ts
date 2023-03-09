import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'notificacoes'})
export class NotificacoesEntity {
    @PrimaryGeneratedColumn({name:'uuid', type:'int'})
    id: number;

    @Column({type:'int'})
    agendamento_id: number;

    @Column({type: 'enum' })
    tipo: Enumerator;  
}