import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoaComponent} from "../pessoa.component";
import {FieldsetModule} from "primeng/fieldset";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {RouterModule, Routes} from "@angular/router";
import {DetalhamentoPessoaComponent} from "../detalhamento-pessoa/detalhamento-pessoa.component";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {CepService} from "../../../commons/service/cep.service";


const routes: Routes = [
  {path: "pessoas", component: PessoaComponent},
];

@NgModule({
  declarations: [
    PessoaComponent,
    DetalhamentoPessoaComponent,
  ],
  imports: [
    CommonModule,
    FieldsetModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    InputMaskModule,
    DynamicDialogModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  exports: [
    PessoaComponent,
    DetalhamentoPessoaComponent,
  ],
  providers: [
    DialogService,
    MessageService,
    ConfirmationService,
    HttpClient,
  ]
})
export class PessoaModule { }
