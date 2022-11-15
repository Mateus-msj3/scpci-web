import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {PessoaComponent} from "../pessoa.component";

@Component({
  selector: 'app-detalhamento-pessoa',
  templateUrl: './detalhamento-pessoa.component.html',
  styleUrls: ['./detalhamento-pessoa.component.css']
})
export class DetalhamentoPessoaComponent implements OnInit {
  productDialog: any;
  product: any;
  submitted: any;
  products: any;
  selectedProducts: any;
  Delete: any;

  ref!: DynamicDialogRef;

  constructor(private router: Router, private dialogService: DialogService, ) { }

  ngOnInit(): void {
  }

  hideDialog() {

  }

  saveProduct() {

  }

  deleteProduct(product: any) {

  }

  editProduct(product: any) {

  }

  deleteSelectedProducts() {

  }

  openNew() {

  }
}
