import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../componente/header/header.component";
import {TabMenuModule} from "primeng/tabmenu";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [

  ]
})
export class CommonsModule { }
