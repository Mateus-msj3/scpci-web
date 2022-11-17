import {Endereco} from "./endereco";

export class PessoaResponseDTO {

  nome?: string;

  sobrenome?: string;

  dataNascimento?: Date;

  cpf?: string;

  email?: string;

  endereco?: Endereco;
}
