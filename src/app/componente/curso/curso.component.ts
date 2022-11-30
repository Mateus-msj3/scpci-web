import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CursoRequestDTO} from "../../commons/dto/curso-request-dto";
import {CursoResponseDTO} from "../../commons/dto/curso-response-dto";
import {CursoService} from "./service/curso.service";
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";
import {PessoaRequestDTO} from "../../commons/dto/pessoa-request-dto";

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @ViewChild('dt') dt: Table | undefined;

  formulario!: FormGroup;

  cursos: CursoResponseDTO[] = []
  data: any;
  chartOptions: any;


  constructor(private formBuilder: FormBuilder,
              private cursoService: CursoService,
              private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.criarFormulario(new CursoRequestDTO());
    this.listarTodos();
    this.data = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
  }

  applyFilterGlobal(event: any, stringVal: any) {
    this.dt!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  criarFormulario(curso: CursoRequestDTO) {
    this.formulario = this.formBuilder.group({
      nome: [curso.nome, Validators.required],
      numeroVagas: [curso.numeroVagas, Validators.required],
    });
  }

  listarTodos() {
    this.cursoService.listarTodos().subscribe(response => {
      console.log(response);
      this.cursos = response;
    });
  }

  verficaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty()
    });
  }

  adicionarMensagem(key: string, tipo: string, mensagem: string) {
    this.messageService.add({
      key: key,
      severity: tipo,
      summary: mensagem
    });
  }

  submit() {
    if (this.formulario.valid) {
      const curso: CursoRequestDTO = this.formulario.getRawValue();
      this.cursoService.salvar(curso).subscribe(response => {
        let mensagemRetornada = JSON.stringify(response.mensagem);
        this.adicionarMensagem('salvar', 'success', mensagemRetornada);
        this.limparFormulario();
        this.listarTodos();
      })
    } else {
      this.verficaValidacoesForm(this.formulario);
      this.adicionarMensagem('erro', 'error', 'É necessário preencher todos os campos obrigatórios!');
    }
  }

  limparFormulario() {
    this.formulario?.reset();
  }

  get nome() {
    return this.formulario?.get('nome');
  }

  get numeroVagas() {
    return this.formulario?.get('numeroVagas');
  }

}
