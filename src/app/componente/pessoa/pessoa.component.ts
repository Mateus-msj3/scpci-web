import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {DetalhamentoPessoaComponent} from "./detalhamento-pessoa/detalhamento-pessoa.component";
import {CepService} from "../../commons/service/cep.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PessoaRequestDTO} from "../../commons/dto/pessoa-request-dto";
import {MessageService} from "primeng/api";
import {PessoaService} from "./service/pessoa.service";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  ref?: DynamicDialogRef;
  formulario!: FormGroup;

  ruaNaoEncontrada: boolean = true;
  numeroNaoEncontrado: boolean = true;
  cidadeNaoEncontrada: boolean = true;
  estadoNaoEncontrado: boolean = true;

  constructor(private dialogService: DialogService,
              private cepService: CepService,
              private formBuilder: FormBuilder,
              private messageService: MessageService,
              private pessoaService: PessoaService) {
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

      endereco: this.formBuilder.group({
        cep: [pessoa.endereco?.cep, Validators.required],
        cidade: [pessoa.endereco?.cidade, Validators.required],
        estado: [pessoa.endereco?.estado, Validators.required],
        rua: [pessoa.endereco?.rua, Validators.required],
        numero: [pessoa.endereco?.numero, Validators.required],
      })
    });
  }

  consultarCep(event: Event, form: any) {
    const cep = (event.target as HTMLInputElement).value;

    this.cepService.buscar(cep).subscribe((dados: any) => {
      if (!dados.erro) {
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
    this.formulario?.patchValue({
      endereco: {
        cep: dados?.cep,
        cidade: dados?.localidade,
        estado: dados?.uf,
        rua: dados?.logradouro,
        numero: dados?.gia,
      }
    });
  }

  salvar() {
    if (this.formulario.valid) {
      const pessoa: PessoaRequestDTO = this.formulario.getRawValue();

      this.pessoaService.salvar(pessoa).subscribe((response) => {
        this.adicionarMensagem('success', 'Registro salvo com sucesso!');
        this.limparFormulario();
      }, error => {
        let erro = JSON.stringify(error.error.errors[0]);
        this.adicionarMensagem('error', erro);
      });

    } else {
      this.verficaValidacoesForm(this.formulario);
      this.adicionarMensagem('error', 'É necessário preencher todos os campos obrigatórios!');
    }

  }

  verficaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty()
      if (controle instanceof  FormGroup) {
        this.verficaValidacoesForm(controle);
      }
    });
  }

  adicionarMensagem(tipo: string, mensagem: string) {
    this.messageService.add({
      severity: tipo,
      summary: mensagem
    });
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
    return this.formulario?.get('endereco.cep');
  }

  get cidade() {
    return this.formulario?.get('endereco.cidade');
  }

  get estado() {
    return this.formulario?.get('endereco.estado');
  }

  get rua() {
    return this.formulario?.get('endereco.rua');
  }

  get numero() {
    return this.formulario?.get('endereco.numero');
  }

}
