import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {delay, finalize, Observable} from 'rxjs';
import {LoadingService} from "../service/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private requisicoesAtivas: number = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.requisicoesAtivas == 0) {
      this.loadingService.show();
    }
    this.requisicoesAtivas++;

    return next.handle(request).pipe(
      //Remover quando subir para produção
      delay(5000),
      finalize(() => {
        this.requisicoesAtivas--;

        if (this.requisicoesAtivas == 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
