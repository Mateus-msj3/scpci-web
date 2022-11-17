import {Endereco} from "./endereco";

export class PessoaRequestDTO {

  nome?: string;

  sobrenome?: string;

  dataNascimento?: Date;

  cpf?: string;

  email?: string;

  endereco?: Endereco;
}
