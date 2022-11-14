import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoaComponent} from "../pessoa.component";
import {FieldsetModule} from "primeng/fieldset";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: "pessoas", component: PessoaComponent},
];

@NgModule({
  declarations: [
    PessoaComponent,
  ],
  imports: [
    CommonModule,
    FieldsetModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    InputMaskModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    PessoaComponent,
  ],
  providers: [

  ]
})
export class PessoaModule { }
