import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CrudService} from "../../../commons/service/crud.service";

@Injectable({
  providedIn: 'root'
})
export class CursoService extends CrudService<any, number> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/cursos`);
  }
}
