import {Injectable} from '@angular/core';
import {CrudService} from "../../../commons/service/crud.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {PessoaResponseDTO} from "../../../commons/dto/pessoa-response-dto";

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudService<PessoaResponseDTO, number> {


  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/pessoas`);
  }

  buscarQuantidadePessoas() {
    return this._http.get<any>(`${environment.api.baseUrl}/pessoas/quantidade_pessoas_cadastradas`)
  }
}
