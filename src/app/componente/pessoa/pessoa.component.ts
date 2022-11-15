import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {DetalhamentoPessoaComponent} from "./detalhamento-pessoa/detalhamento-pessoa.component";
import {CepService} from "../../commons/service/cep.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PessoaRequestDTO} from "../../commons/dto/pessoa-request-dto";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  ref?: DynamicDialogRef;
  formulario?: FormGroup;

  ruaNaoEncontrada: boolean = true;
  numeroNaoEncontrado: boolean = true;
  cidadeNaoEncontrada: boolean = true;
  estadoNaoEncontrado: boolean = true;

  mostrarMsgErro: boolean = false;

  constructor(private dialogService: DialogService,
              private cepService: CepService,
              private formBuilder: FormBuilder,
              private messageService: MessageService) {
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
      sobrenome: [pessoa.sobrenome, Validators.required],
      dataNascimento: [pessoa.dataNascimento, Validators.required],
      cpf: [pessoa.cpf, Validators.required],
      email: [pessoa.email, [Validators.required, Validators.email]],
      cep: [pessoa.endereco?.cep, Validators.required],
      cidade: [pessoa.endereco?.cidade, Validators.required],
      estado: [pessoa.endereco?.estado, Validators.required],
      rua: [pessoa.endereco?.rua, Validators.required],
      numero: [pessoa.endereco?.numero, Validators.required],
    });
  }

  consultarCep(event: Event, form: any) {
    const cep = (event.target as HTMLInputElement).value;

    this.cepService.buscar(cep).subscribe((dados: any) => {
      if (!dados.erro) {
        debugger
        this.preencherCamposEndereco(dados, form);
        this.verficarCamposEnderecoAntesDeHabilitarEdicao(dados);
      } else {
        this.messageService.add({
          severity: 'info',
          summary: 'Cep não encontrado, por favor insira seus dados.',
          detail: dados.cep
        });
        this.habilitarEdicaoCamposEndereco();
      }

    });
  }

  verficarCamposEnderecoAntesDeHabilitarEdicao(dados: any) {
    if (dados.localidade === '') {
      this.cidadeNaoEncontrada = false;
    }
    if (dados.uf === '') {
      this.estadoNaoEncontrado = false;
    }
    if (dados.logradouro === '') {
      this.ruaNaoEncontrada = false;
    }
    if (dados.gia === '') {
      this.numeroNaoEncontrado = false;
    }
  }

  habilitarEdicaoCamposEndereco() {
    this.cidadeNaoEncontrada = false;
    this.estadoNaoEncontrado = false;
    this.ruaNaoEncontrada = false;
    this.numeroNaoEncontrado = false;
  }


  preencherCamposEndereco(dados: any, form: any) {
    this.formulario?.setValue({
      nome: this.nome?.value,
      sobrenome: this.sobrenome?.value,
      dataNascimento: this.dataNascimento?.value,
      cpf: this.cpf?.value,
      email: this.email?.value,
      cep: dados?.cep,
      cidade: dados?.localidade,
      estado: dados?.uf,
      rua: dados?.logradouro,
      numero: dados?.gia,
    });
  }

  validarFormulario(form: FormGroup) {

  }

  salvar() {
    if (this.formulario?.valid) {
      const t: PessoaRequestDTO = this.formulario?.getRawValue();
      console.log(t);
    } else {
      this.mostrarMsgErro = true;
      this.messageService.add({
        severity: 'error',
        summary: 'É necessário preencher todos os campos obrigatórios'
      });
    }

  }

  limparFormulario() {
    this.formulario?.reset();
  }

  get nome() {
    return this.formulario?.get('nome');
  }

  get sobrenome() {
    return this.formulario?.get('sobrenome');
  }

  get dataNascimento() {
    return this.formulario?.get('dataNascimento');
  }

  get cpf() {
    return this.formulario?.get('cpf');
  }

  get email() {
    return this.formulario?.get('email');
  }

  get cep() {
    return this.formulario?.get('cep');
  }

  get cidade() {
    return this.formulario?.get('cidade');
  }

  get estado() {
    return this.formulario?.get('estado');
  }

  get rua() {
    return this.formulario?.get('rua');
  }

  get numero() {
    return this.formulario?.get('numero');
  }

}
