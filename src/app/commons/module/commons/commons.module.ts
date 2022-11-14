import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../../componente/header/header.component";
import {TabMenuModule} from "primeng/tabmenu";
import {FooterComponent} from "../../componente/footer/footer.component";
import {HomeComponent} from "../../componente/home/home.component";


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  providers: [

  ]
})
export class CommonsModule { }
