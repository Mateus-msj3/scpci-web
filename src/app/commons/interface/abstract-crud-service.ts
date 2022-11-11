import {Observable} from "rxjs";

export interface AbstractCrudService<T, ID> {

  listarTodos(): Observable<T[]>;

  listarPorId(id: ID): Observable<T>;

  salvar(t: T): Observable<T>;

  editar(id: ID, t:T): Observable<T>;

  deletar(id: ID): Observable<any>;

}
