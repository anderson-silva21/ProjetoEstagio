export declare enum Tipo {
    SOLICITACAO = "Solicitacao",
    APROVACAO = "Aprovacao",
    GHOST = "Ghost"
}
export declare class Notificacoes {
    id: number;
    agendamento_id: number;
    tipo: Tipo;
}
