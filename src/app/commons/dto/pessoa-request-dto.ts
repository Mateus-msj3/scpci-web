import {Endereco} from "./endereco";

export class PessoaRequestDTO {
  id?: number;

  nome?: string;

  sobrenome?: string;

  dataNascimento?: Date;

  cpf?: string;

  email?: string;

  endereco?: Endereco;
}
