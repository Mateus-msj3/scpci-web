import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];

  activeItem!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'pi pi-chart-line', routerLink: '/dashboard'},
      {label: 'Pessoas', icon: 'pi pi-users', routerLink: '/pessoas'},
      {label: 'Cursos', icon: 'pi pi-book', routerLink: '/cursos'},
      {label: 'Inscrições', icon: 'pi pi-file-edit', routerLink: '/inscricoes'},
    ];
    this.activeItem = this.items[0];
  }

}
