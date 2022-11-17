import {Injectable} from '@angular/core';
import {CrudService} from "../../../commons/service/crud.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudService<any, any> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/pessoas`);
  }
}
