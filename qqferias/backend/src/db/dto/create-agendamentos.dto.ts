import { IsNotEmpty } from "class-validator";

export class createAgendamentos {
    @IsNotEmpty()
    funcionario_id: number;

    @IsNotEmpty()
    data_inicio: Date;

    @IsNotEmpty()
    data_fim: Date;

    @IsNotEmpty()
    status: String;

    @IsNotEmpty()
    antecipacao_13_salario: boolean;
}