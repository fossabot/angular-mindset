import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

enum METHOD {
  GET = 'GET',
  POST = 'POST'
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url);

    return handleRoute(request) || next.handle(request);
  }
}

function test() {
  return ok({
    route: '/test',
    status: 'success'
  })
}

function ok<T>(body: T | null, status = 200) {
  return of(new HttpResponse({status, body}))
}

function handleRoute({url, method}: HttpRequest<any>): Observable<HttpEvent<any>> | null {
  if (url.endsWith('/test') && method === METHOD.GET) {
    return test();
  }

  return null;
}

/**
 * Include in app.modules.ts to use fake-backend.
 */
export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
}
