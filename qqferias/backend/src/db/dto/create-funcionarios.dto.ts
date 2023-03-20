import { IsNotEmpty } from "class-validator";

export enum Contrato {
    CLT = 'CLT',
    PJ = 'PJ',
    GHOST = 'Ghost'
}

export enum Func {
    GESTOR = 'Gestor',
    COLABORADOR = 'Colaborador',
    GHOST = 'Ghost'
}

export class createFuncionarios {
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    matricula: string;

    @IsNotEmpty()
    tipoContrato: Contrato;

    @IsNotEmpty()
    tipoFuncionario: Func;

    @IsNotEmpty()
    dataIngresso: Date;

    @IsNotEmpty()
    gestorId: number;
}