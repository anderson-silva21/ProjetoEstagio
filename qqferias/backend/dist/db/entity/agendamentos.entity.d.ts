export declare enum Stat {
    PENDENTE = "Pendente",
    APROVADO = "Aprovado",
    REPROVADO = "Reprovado",
    GHOST = "Ghost"
}
export declare class Agendamentos {
    id: number;
    funcionario_id: number;
    data_inicio: Date;
    data_fim: Date;
    dias: number;
    status: Stat;
    antecipacao_13_salario: boolean;
}
