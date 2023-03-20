import { IsNotEmpty } from "class-validator";

export enum Tipo {
    PARTIDA = 'Partida',
    RETORNO = 'Retorno',
    GHOST = 'Ghost'
}

export class createCompromissos {
    @IsNotEmpty()
    agendamento_id: number;

    @IsNotEmpty()
    tipo: Tipo;
}