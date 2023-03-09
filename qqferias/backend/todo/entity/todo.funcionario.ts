import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'funcionario'})
export class FuncionarioEntity {
    @PrimaryGeneratedColumn({name:'uuid', type:'int'})
    id: number;

    @Column({width: 100})
    nome: string;

    @Column({type: 'enum' })
    tipo_contrato: Enumerator;

    @Column({type: 'enum' })
    tipo_funcionario: Enumerator;

    @Column({type:'int'})
    gestor_id: number;  
}