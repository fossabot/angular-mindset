import { Task } from './../models/Task';
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

function task(id: number): Observable<HttpEvent<Task>> {
  if (id === 4592) {
    return ok({
      title: "Erstellung einer App für Gedankensortierung",
      id: 4592,
      questions: [
        {
          content: "Was wird für die App aktuell benötigt?",
          answers: [
            { content: "Einen Konfigurator." },
            { content: "Eine UI in der man neue Fragestellungen und Aufgaben definieren kann."}
          ]
        }
      ]
    })
  }

  return ok({
    title: "",
    id: -1,
    questions: []
  })
}

function handleRoute({url, method}: HttpRequest<any>): Observable<HttpEvent<any>> | null {
  if (url.endsWith('/test') && method === METHOD.GET) {
    return test();
  }

  if (url.endsWith('/task/1') && method === METHOD.GET) {
    return task(4592);
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
