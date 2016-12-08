import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {

  constructor(public http: Http, @Inject('API_URL') private url: string) {
    console.log('Hello Service Provider');
  }

  getServices(vstdate: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { vstdate: vstdate };

      this.http.post(`${this.url}/services`, body, options)
      // this.http.get(this.url + '/users')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

}
