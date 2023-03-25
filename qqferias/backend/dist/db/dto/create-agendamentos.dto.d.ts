export declare enum Stat {
    PENDENTE = "Pendente",
    APROVADO = "Aprovado",
    REPROVADO = "Reprovado",
    GHOST = "Ghost"
}
export declare class createAgendamentos {
    funcionario_id: number;
    data_inicio: Date;
    data_fim: Date;
    status: Stat;
    dias: number;
    antecipacao_13_salario: boolean;
    gestor_id: number;
}
