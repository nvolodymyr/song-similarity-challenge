import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('https://searchly.asuarez.dev')) {
      req = req.clone({
        withCredentials: true
      });

      return next.handle(req);
    }

  }
}

