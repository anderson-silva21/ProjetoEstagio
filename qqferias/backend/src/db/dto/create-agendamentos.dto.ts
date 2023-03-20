import { IsNotEmpty } from "class-validator";

export enum Stat {
    PENDENTE = 'Pendente',
    APROVADO = 'Aprovado',
    REPROVADO = 'Reprovado',
    GHOST = 'Ghost'
}

export class createAgendamentos {
    @IsNotEmpty()
    funcionario_id: number;

    @IsNotEmpty()
    data_inicio: Date;

    @IsNotEmpty()
    data_fim: Date;

    @IsNotEmpty()
    status: Stat;

    @IsNotEmpty()
    antecipacao_13_salario: boolean;
}