declare module "AutenticacaoDeTipos" {
    export interface usuario {
        email: string
        funcoes: Array<string>
        fonte?: string
    }
}