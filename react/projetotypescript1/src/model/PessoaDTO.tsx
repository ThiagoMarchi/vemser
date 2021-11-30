export interface PessoasDTO {
  pessoas: {
    cpf: string,
    dataNascimento: string,
    email: string,
    idPessoa: number,
    nome: string,
  } []
}

export interface PessoaDTO {
  cpf: string,
  dataNascimento: string,
  email: string,
  idPessoa?: number,
  nome: string,
}