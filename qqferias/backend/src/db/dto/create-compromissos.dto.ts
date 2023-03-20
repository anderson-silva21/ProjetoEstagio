import { IsNotEmpty } from "class-validator";

export class createCompromissos {
    @IsNotEmpty()
    agendamento_id: number;

    @IsNotEmpty()
    tipo: String;

}