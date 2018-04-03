import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Hires} from '../interfaces/hires';

@Injectable()
export class HiresService {

 private hiresUrl = 'http://localhost:3000/hires';
 private json = '.json';

  constructor(private http:Http) { }


  getHires() :Observable<Hires[]>{

    return this.http.get(this.hiresUrl+this.json).map((response:Response )=> <Hires[]>response.json()).catch(this.handleError);
  
  }

  getHire(id:number){
      return this.http.get(this.hiresUrl + "/" + id+this.json);
  }

  createHire(hire){
    let headers  = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers :headers});
    return this.http.post(this.hiresUrl+this.json,JSON.stringify(hire),{headers: headers}).map((response :Response)=> response.json());
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

