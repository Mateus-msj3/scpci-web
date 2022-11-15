import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonsModule} from "./commons/module/commons/commons.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PessoaModule} from "./componente/pessoa/pessoa-module/pessoa.module";

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
