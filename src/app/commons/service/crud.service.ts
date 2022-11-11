import {Injectable} from '@angular/core';
import {AbstractCrudService} from "../interface/abstract-crud-service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T, ID> implements AbstractCrudService<T, ID> {

  constructor(protected _http: HttpClient, protected _baseUrl: string) {
  }

  listarTodos(): Observable<T[]> {
    return this._http.get<T[]>(this._baseUrl);
  }

  listarPorId(id: ID): Observable<T> {
    return this._http.get<T>(this._baseUrl + "/" + id);
  }

  salvar(t: T): Observable<T> {
    return this._http.post<T>(this._baseUrl, t);
  }

  editar(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._baseUrl + "/" + id, t, {});
  }

  deletar(id: ID): Observable<any> {
    return this._http.delete<T>(this._baseUrl + "/" + id);
  }

}
