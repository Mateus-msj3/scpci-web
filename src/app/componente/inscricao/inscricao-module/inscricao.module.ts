import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InscricaoComponent} from "../inscricao.component";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";
import {FieldsetModule} from "primeng/fieldset";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {RouterModule, Routes} from "@angular/router";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";


const routes: Routes = [
  {path: "inscricoes", component: InscricaoComponent},
];


@NgModule({
  declarations: [
    InscricaoComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ReactiveFormsModule,
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    RatingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    InscricaoComponent,
  ],
  providers: [

  ]
})
export class InscricaoModule { }
