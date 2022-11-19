import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursoComponent} from "../curso.component";
import {ToastModule} from "primeng/toast";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FieldsetModule} from "primeng/fieldset";
import {RouterModule, Routes} from "@angular/router";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";

const routes: Routes = [
  {path: "cursos", component: CursoComponent},
];

@NgModule({
  declarations: [
    CursoComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ReactiveFormsModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forRoot(routes),
    RatingModule,
    TableModule,
    FormsModule,
    ToolbarModule,
  ],
  exports: [
    CursoComponent,
  ],
  providers: [

  ]
})
export class CursoModule { }
