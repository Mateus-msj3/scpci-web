import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonsModule} from "./commons/module/commons/commons.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PessoaModule} from "./componente/pessoa/pessoa-module/pessoa.module";
import {CepService} from "./commons/service/cep.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoadingInterceptor} from "./commons/interceptor/loading.interceptor";
import {TranslateModule, TranslateService, TranslateStore} from "@ngx-translate/core";
import {CursoModule} from "./componente/curso/curso-module/curso.module";

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
    CursoModule,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    CepService,
    TranslateService,
    TranslateStore,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
