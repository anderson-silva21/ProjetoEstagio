import { IsNotEmpty } from "class-validator";

export class createNotificacoes {
    @IsNotEmpty()
    agendamento_id: number;

    @IsNotEmpty()
    tipo: String;
}