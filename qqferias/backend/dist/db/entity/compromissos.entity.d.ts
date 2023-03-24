export declare enum Tipo {
    PARTIDA = "Partida",
    RETORNO = "Retorno",
    GHOST = "Ghost"
}
export declare class Compromissos {
    id: number;
    agendamento_id: number;
    tipo: Tipo;
}
