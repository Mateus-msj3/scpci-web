import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InscricaoRequestDTO} from "../../../commons/dto/inscricao-request-dto";
import {InscricaoFinalizacaoRequestDTO} from "../../../commons/dto/inscricao-finalizacao-request-dto";
import {InscricaoResponseDTO} from "../../../commons/dto/inscricao-response-dto";

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  apiURL: string = environment.api.baseUrl + "/inscricoes";

  constructor(private http: HttpClient) { }

  salvar(inscricao: InscricaoRequestDTO): Observable<InscricaoRequestDTO> {
    return this.http.post<InscricaoRequestDTO>(this.apiURL + '/salvar', inscricao);
  }

  buscarInscritosCurso(idCurso?: number): Observable<InscricaoResponseDTO[]> {
    return this.http.get<InscricaoResponseDTO[]>(this.apiURL + `/inscritos/${idCurso}`);
  }

  buscarInscritosSelecionados(idCurso?: number): Observable<InscricaoResponseDTO[]> {
    return this.http.get<InscricaoResponseDTO[]>(this.apiURL + `/inscritos-finalizados/${idCurso}`);
  }

  finalizar(finalizacao: InscricaoFinalizacaoRequestDTO): Observable<InscricaoFinalizacaoRequestDTO> {
    return this.http.post<InscricaoFinalizacaoRequestDTO>(this.apiURL + '/solicitar-finalizacao', finalizacao);
  }

  buscarQuantidadePessoasInscritas() {
    return this.http.get<any>(this.apiURL + `/quantidades-pessoas-inscritas`);
  }

}
