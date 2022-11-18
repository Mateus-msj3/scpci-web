import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {PessoaService} from "../service/pessoa.service";
import {PessoaRequestDTO} from "../../../commons/dto/pessoa-request-dto";
import {Table} from "primeng/table";
import {ConfirmationService, MessageService} from "primeng/api";
import {PessoaResponseDTO} from "../../../commons/dto/pessoa-response-dto";

@Component({
  selector: 'app-detalhamento-pessoa',
  templateUrl: './detalhamento-pessoa.component.html',
  styleUrls: ['./detalhamento-pessoa.component.css']
})
export class DetalhamentoPessoaComponent implements AfterViewInit, OnInit {

  @ViewChild('dt') dt: Table | undefined;

  ref!: DynamicDialogRef;

  pessoas: PessoaResponseDTO[] = [];

  abrirFormEditar: boolean = false;

  pessoaParaEditar!: PessoaRequestDTO;

  constructor(private pessoaService: PessoaService,
              private dialogService: DialogService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
  }

  listarPessoas() {
    this.pessoaService.listarTodos().subscribe((response) => {
      this.pessoas = response;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.listarPessoas();
    }, 1);
  }

  applyFilterGlobal(event: any, stringVal: any) {
    this.dt!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  fecharFormEdicaoPessoa() {
    this.abrirFormEditar = false;
    this.listarPessoas();
  }

  adicionarMensagem(tipo: string, mensagem: string) {
    this.messageService.add({
      severity: tipo,
      summary: mensagem
    });
  }

  deletarPessoa(pessoa: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir ' + pessoa.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.pessoaService.deletar(pessoa.id).subscribe(response => {
          this.adicionarMensagem('success', 'Registro deletado com sucesso')
          this.listarPessoas();
        });
      }
    });
  }

  editarPessoa(pessoa: any) {
    this.pessoaParaEditar = {...pessoa}
    this.abrirFormEditar = true;
  }

}
