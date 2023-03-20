import { IsNotEmpty } from "class-validator";

export enum Tipo {
    SOLICITACAO = 'Solicitacao',
    APROVACAO = 'Aprovacao',
    GHOST = 'Ghost'
}

export class createNotificacoes {
    @IsNotEmpty()
    agendamento_id: number;

    @IsNotEmpty()
    tipo: Tipo;
}