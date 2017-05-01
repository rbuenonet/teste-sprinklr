import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Config } from '../enum/config.enum';

@Injectable()
export class PlanoService {

  constructor(private http: Http) {}

  list() : Promise<any>{
    let url = Config[0] + '/plano';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.get(url, {headers: headers, body: ''})
      .toPromise()
      .then(retorno => retorno.json())
      .catch(error => error);
  }

  consult(param) : Promise<any>{
    let url = Config[0] + '/plano/calc';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(url, {headers: headers, body: param})
      .toPromise()
      .then(retorno => retorno.json())
      .catch(error => error);
  }
}

