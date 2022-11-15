import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {DetalhamentoPessoaComponent} from "./detalhamento-pessoa/detalhamento-pessoa.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  ref?: DynamicDialogRef;

  constructor(private dialogService: DialogService, private router: Router) {
  }

  ngOnInit(): void {
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
}
