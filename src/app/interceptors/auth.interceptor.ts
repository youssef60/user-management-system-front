import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.includes('http://localhost:4200/login')){

      return next.handle(request);
    }

    const token = localStorage.getItem('token')

    const requestClone = request.clone({ setHeaders : {authorization : `${token}`} })
    return next.handle(requestClone);

  }
}
