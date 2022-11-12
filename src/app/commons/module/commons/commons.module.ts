import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../componente/header/header.component";
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    CardModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [

  ]
})
export class CommonsModule { }
