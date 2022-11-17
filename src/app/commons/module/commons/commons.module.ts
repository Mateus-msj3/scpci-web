import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../../componente/header/header.component";
import {TabMenuModule} from "primeng/tabmenu";
import {FooterComponent} from "../../componente/footer/footer.component";
import {HomeComponent} from "../../componente/home/home.component";
import {LoadingComponent} from "../../componente/loading/loading.component";
import {ProgressSpinnerModule} from "primeng/progressspinner";


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    ProgressSpinnerModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoadingComponent,
  ],
  providers: [

  ]
})
export class CommonsModule { }
