import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonsModule} from "./commons/module/commons/commons.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PessoaModule} from "./componente/pessoa/pessoa-module/pessoa.module";
import {CepService} from "./commons/service/cep.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    BrowserAnimationsModule,
    PessoaModule,
    HttpClientModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
