import {EnderecoRequestDTO} from "./endereco-request-dto";

export class PessoaRequestDTO {

  nome?: string;

  sobrenome?: string;

  dataNascimento = new Date();

  cpf?: string;

  email?: string;

  endereco?: EnderecoRequestDTO;
}
