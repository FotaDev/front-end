import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Sizes} from '../interface/sizes';

@Injectable()
export class SizesService {

  private sizesUrl = 'http://localhost:3000/sizes.json'
  constructor(private http:Http) { }

  getSizes() :Observable<Sizes[]>{

    return this.http.get(this.sizesUrl).map((response:Response )=> <Sizes[]>response.json()).catch(this.handleError);
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
