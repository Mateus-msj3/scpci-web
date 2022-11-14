import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../componente/header/header.component";
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";
import {FooterComponent} from "../../componente/footer/footer.component";
import {PessoaComponent} from "../../../componente/pessoa/pessoa.component";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import {FieldsetModule} from "primeng/fieldset";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PessoaComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    CardModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    FieldsetModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PessoaComponent,
  ],
  providers: [

  ]
})
export class CommonsModule { }
