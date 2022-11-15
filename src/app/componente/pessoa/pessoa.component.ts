import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {DetalhamentoPessoaComponent} from "./detalhamento-pessoa/detalhamento-pessoa.component";
import {CepService} from "../../commons/service/cep.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PessoaRequestDTO} from "../../commons/dto/pessoa-request-dto";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  ref?: DynamicDialogRef;
  formulario?: FormGroup;

  constructor(private dialogService: DialogService,
              private cepService: CepService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.criarFormulario(new PessoaRequestDTO())
  }

  abrirTelaDeDetalhes() {
    this.ref = this.dialogService.open(DetalhamentoPessoaComponent, {
      header: 'Detalhes',
      width: '80%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true
    });
  }

  criarFormulario(pessoa: PessoaRequestDTO) {
    this.formulario = this.formBuilder.group({
      nome: [pessoa.nome, Validators.required],
      sobrenome: [pessoa.sobrenome],
      dataNascimento: [pessoa.dataNascimento],
      cpf: [pessoa.cpf],
      email: [pessoa.email],
      cep: [pessoa.endereco?.cep],
      cidade: [pessoa.endereco?.cidade],
      estado: [pessoa.endereco?.estado],
      rua: [pessoa.endereco?.rua],
      numero: [pessoa.endereco?.numero],
    });
  }

  consultarCep(event: Event, form: any) {
    console.log(event)
    const cep = (event.target as HTMLInputElement).value;
    console.log(cep)
    this.cepService.buscar(cep).subscribe((dados) => {
      console.log(dados)
      this.preencherCamposEndereco(dados, form);
    });
  }

  preencherCamposEndereco(dados: any, form: any) {
    this.formulario?.setValue({
      cep: dados.cep,
      cidade: dados.localidade,
      estado: dados.uf,
      rua: dados.logradouro,
      numero: dados.gia,
    });
  }

  salvar() {

  }

  limparFormulario() {
    this.formulario?.reset();
  }
}
