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
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [

  ]
})
export class DashboardModule { }
