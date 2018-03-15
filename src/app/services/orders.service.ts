import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Orders} from '../interface/orders';

@Injectable()
export class OrdersService {

  private ordersUrl = 'http://localhost:3000/orders.json'
  constructor(private http:Http) { }

  getOrders() :Observable<Orders[]>{

    return this.http.get(this.ordersUrl).map((response:Response )=> <Orders[]>response.json()).catch(this.handleError);
  }


  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
