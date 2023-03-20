import { IsNotEmpty } from "class-validator";

export class createFuncionarios {
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    matricula: string;

    @IsNotEmpty()
    tipoContrato: String;

    @IsNotEmpty()
    tipoFuncionario: String;

    @IsNotEmpty()
    dataIngresso: Date;

    @IsNotEmpty()
    gestorId: number;
}