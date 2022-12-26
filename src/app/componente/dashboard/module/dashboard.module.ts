import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard.component";
import {CommonsModule} from "../../../commons/module/commons/commons.module";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {ChartModule} from "primeng/chart";
import {DialogModule} from "primeng/dialog";
import {PessoaModule} from "../../pessoa/pessoa-module/pessoa.module";

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        CommonsModule,
        RouterModule.forRoot(routes),
        CardModule,
        TableModule,
        ButtonModule,
        RatingModule,
        ChartModule,
        DialogModule,
        PessoaModule,
    ],
  exports: [
    DashboardComponent,
  ],
  providers: [

  ]
})
export class DashboardModule { }
