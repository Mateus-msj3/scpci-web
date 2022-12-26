import {Component, Input, OnInit} from '@angular/core';
import {CursoService} from "../../curso/service/curso.service";
import {CursoResponseDTO} from "../../../commons/dto/curso-response-dto";
import {PessoaService} from "../service/pessoa.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PessoaReportRequestDTO} from "../../../commons/dto/pessoa-report-request-dto";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  pessoas: any;

  cursos: CursoResponseDTO[] = [];

  formulario!: FormGroup;

  constructor(private cursoService: CursoService,
              private pessoaService: PessoaService,
              private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.criarFormulario(new PessoaReportRequestDTO());
    this.listarCursos();
  }

  criarFormulario(dados: PessoaReportRequestDTO) {
    this.formulario = this.formBuilder.group({
      curso: [null],
    });
  }

  listarCursos() {
    this.cursoService.listarTodos().subscribe(response => {
      response.forEach(curso => {
        if (curso.situacaoInscricao === "FINALIZADO") {
          curso.nome = curso.nome + " - (IF)";
        }
        this.cursos.push(curso);
        this.cursos = this.cursos.sort((a, b) => {
          if (a.nome < b.nome) return -1;
          if (a.nome > b.nome) return 1;
          return 0;
        });
      });
    });
  }

  gerarRelatorio() {
    const dados = this.formulario.getRawValue();
    this.pessoaService.gerarRelatorioPessoasInscritas(this.dadosRelatorio(dados)).subscribe(response => {
      const file = new Blob([response], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      this.formulario.reset();
    });
  }

  dadosRelatorio(dados: any) : PessoaReportRequestDTO {
    const pessoaReport = new PessoaReportRequestDTO();
    pessoaReport.idCurso = dados.curso.idCurso;
    pessoaReport.nome = dados.curso.nome;
    pessoaReport.numeroVagas = dados.curso.numeroVagas;
    pessoaReport.situacaoInscricao = dados.curso.situacaoInscricao;
    return pessoaReport;
  }

  get curso() {
    return this.formulario.value;
  }

}
