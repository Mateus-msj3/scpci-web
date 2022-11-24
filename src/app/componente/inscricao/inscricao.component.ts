import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PessoaService} from "../pessoa/service/pessoa.service";
import {CursoService} from "../curso/service/curso.service";
import {CursoResponseDTO} from "../../commons/dto/curso-response-dto";
import {PessoaResponseDTO} from "../../commons/dto/pessoa-response-dto";
import {InscricaoRequestDTO} from "../../commons/dto/inscricao-request-dto";
import {InscricaoResponseDTO} from "../../commons/dto/inscricao-response-dto";
import {MessageService, SelectItem} from "primeng/api";
import {InscricaoService} from "./service/inscricao.service";

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css'],
})
export class InscricaoComponent implements OnInit {

  formulario!: FormGroup;

  items!: SelectItem[];

  cursos: CursoResponseDTO[] = [];

  pessoas: PessoaResponseDTO[] = [];

  inscritosNoCurso: InscricaoResponseDTO[] = [];

  inscritosSelecionados: InscricaoResponseDTO[] = [];

  desabilitarBotaoFinalizar: boolean = false;

  posicaoAlunoInscricao: number = 0;

  constructor(private formBuilder: FormBuilder,
              private inscricaoService: InscricaoService,
              private pessoaService: PessoaService,
              private cursoService: CursoService,
              private messageService: MessageService,) { }

  ngOnInit(): void {
    this.listarCursos();
    this.listarPessoas();
    this.criarFormulario(new InscricaoRequestDTO());
  }

  criarFormulario(inscricao: InscricaoRequestDTO) {
    this.formulario = this.formBuilder.group({
      idCurso: [inscricao.idCurso, Validators.required],
      cpf: [inscricao.cpf, Validators.required],
      nota: [inscricao.nota, Validators.required],
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

  listarPessoas() {
    this.pessoaService.listarTodos().subscribe(response => {
      this.pessoas = response;
    });
  }

  listarInscritosPorCurso(idCurso: any) {
    this.inscricaoService.buscarInscritosCurso(idCurso).subscribe(response => {
      this.inscritosNoCurso = response;
    });
    this.buscarSituacaoCurso(idCurso);

  }

  buscarSituacaoCurso(idCurso: number) {
    this.cursoService.listarPorId(idCurso).subscribe(response => {
      if (response.situacaoInscricao === "FINALIZADO") {
        this.cpf?.disable();
        this.nota?.disable();
        this.desabilitarBotaoFinalizar = true;
        this.listarInscritosSelecionadosPorCurso(response.idCurso);
      } else {
        this.cpf?.enable();
        this.nota?.enable();
        this.desabilitarBotaoFinalizar = false;
        this.inscritosSelecionados = [];
      }
    });

  }

  listarInscritosSelecionadosPorCurso(idCurso: number) {
    this.inscricaoService.buscarInscritosSelecionados(idCurso).subscribe(response => {
      this.inscritosSelecionados = response;
      this.inscritosSelecionados = this.inscritosSelecionados.sort((a, b) => {
        if (a.nota > b.nota){
          return -1;
        }
        if (a.nota < b.nota) {
          return 1;
        }
        return 0;
      });
    });
  }

  inscreverAlunoNoCurso(inscricao: InscricaoRequestDTO) {
    this.inscricaoService.salvar(inscricao).subscribe(response => {
      this.adicionarMensagem('success', 'Inscrição realizada com sucesso!')
      this.listarInscritosPorCurso(inscricao.idCurso);
      this.cpf?.reset();
      this.nota?.reset();
    })
  }

  finalizarInscricao() {
    this.inscricaoService.finalizar(this.idCurso?.value).subscribe(response => {
      this.adicionarMensagem('info', 'A inscrição está sendo finalizada');
      this.listarInscritosSelecionadosPorCurso(this.idCurso?.value);
    });
  }

  submit() {
    if (this.formulario.valid) {
      const inscricao: InscricaoRequestDTO = this.formulario.getRawValue();
      this.inscreverAlunoNoCurso(inscricao);
    }
  }

  limparFormulario() {
    this.formulario.reset();
  }

  adicionarMensagem(tipo: string, mensagem: string) {
    this.messageService.add({
      severity: tipo,
      summary: mensagem
    });
  }

  get idCurso() {
    return this.formulario?.get('idCurso');
  }

  get cpf() {
    return this.formulario?.get('cpf');
  }

  get nota() {
    return this.formulario?.get('nota');
  }
}
