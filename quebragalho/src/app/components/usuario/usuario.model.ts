export interface Usuario {
    _id?: string,
    usuario: string,
    senha: string,
    nome: string,
    cpf: string,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    estado: string,
    municipio: string,
    email: string,
    telefone: string,
    telefone_secundario?: string
}