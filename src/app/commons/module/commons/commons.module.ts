import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../componente/header/header.component";
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";
import {FooterComponent} from "../../componente/footer/footer.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    CardModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [

  ]
})
export class CommonsModule { }
