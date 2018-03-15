import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Items} from '../interface/items';

@Injectable()
export class ItemsService {

  private itemsUrl = 'http://localhost:3000/items';
  private json = '.json';
  constructor(private http:Http) { }

  getItems() :Observable<Items[]>{

    return this.http.get(this.itemsUrl+this.json).map((response:Response )=> <Items[]>response.json()).catch(this.handleError);
  }

  getItem(id:number){
    return this.http.get(this.itemsUrl + "/" + id+this.json);
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
