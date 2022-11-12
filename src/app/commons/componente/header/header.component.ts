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
      {label: 'Home', icon: 'pi pi-home'},
      {label: 'Pessoas', icon: 'pi pi-users'},
      {label: 'Cursos', icon: 'pi pi-book'},
      {label: 'Inscrições', icon: 'pi pi-file-edit'},
    ];
    this.activeItem = this.items[0];
  }

}
