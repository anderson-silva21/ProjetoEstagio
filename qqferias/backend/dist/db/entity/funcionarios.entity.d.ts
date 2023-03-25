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
export declare class Funcionarios {
    id: number;
    nome: string;
    senha: string;
    email: string;
    tipoContrato: Contrato;
    tipoFuncionario: Func;
    matricula: String;
    dataIngresso: Date;
    gestorId: number;
}
