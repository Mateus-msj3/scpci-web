import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {PessoaService} from "../service/pessoa.service";
import {PessoaResponseDTO} from "../../../commons/dto/pessoa-response-dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PessoaRequestDTO} from "../../../commons/dto/pessoa-request-dto";

@Component({
  selector: 'app-detalhamento-pessoa',
  templateUrl: './detalhamento-pessoa.component.html',
  styleUrls: ['./detalhamento-pessoa.component.css']
})
export class DetalhamentoPessoaComponent implements AfterViewInit, OnInit {
  productDialog: any;
  product: any;
  submitted: any;
  products: any;
  selectedProducts: any;
  Delete: any;



  ref!: DynamicDialogRef;

  pessoas: any= [];

  formulario!: FormGroup;

  constructor(private pessoaService: PessoaService,
              private dialogService: DialogService,
              private formBuilder: FormBuilder,
              ) {

  }

  ngOnInit(): void {
  }

  listarPessoas() {
    this.pessoaService.listarTodos().subscribe((response) => {
      this.pessoas = response;
      // this.pessoas.forEach(pessoa => {
      //   this.criarFormulario(pessoa);
      // })

    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.listarPessoas();
    }, 1);
  }

  criarFormulario(pessoa: PessoaResponseDTO) {
    this.formulario = this.formBuilder.group({
      nome: [pessoa.nome],
      sobrenome: [pessoa.sobrenome],
      dataNascimento: [pessoa.dataNascimento],
      cpf: [pessoa.cpf],
      email: [pessoa.email],

      endereco: this.formBuilder.group({
        cidade: [pessoa.endereco?.cidade, Validators.required],
        estado: [pessoa.endereco?.estado, Validators.required],
      })
    });
  }

  hideDialog() {

  }

  saveProduct() {

  }

  deleteProduct(product: any) {

  }

  editProduct(pessoa: any) {
    console.log(pessoa);

  }

  deleteSelectedProducts() {

  }

  openNew() {

  }
}
