import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }


  get(url: string) {
    return this.http.get(url);
  }

  post(url:string, data:any)
  {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this.http.post(url, JSON.stringify(data), { headers: headers });
  }
}
