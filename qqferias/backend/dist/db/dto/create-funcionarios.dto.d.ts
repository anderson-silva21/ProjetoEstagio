export declare enum Contrato {
    CLT = "CLT",
    PJ = "PJ",
    GHOST = "Ghost"
}
export declare enum Func {
    GESTOR = "Gestor",
    COLABORADOR = "Colaborador",
    GHOST = "Ghost"
}
export declare class createFuncionarios {
    nome: string;
    senha: string;
    email: string;
    matricula: string;
    tipoContrato: Contrato;
    tipoFuncionario: Func;
    dataIngresso: Date;
    gestorId: number;
}
