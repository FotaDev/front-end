import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Hires} from '../interface/hires';

@Injectable()
export class HiresService {

  constructor(private http:Http) { }

  // set the domain
  public endpoint = "http://localhost:3000";

  // retrieve saved information about a particular hire from the API
  get(hireId: string, callback)
  {
    this.http.get(`${this.endpoint}/hires/${hireId}`)
      .subscribe(response => {
        callback(response.json());
      });
  }

  getList(callback)
  {
    this.http.get(`${this.endpoint}/hires`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      });
  }

  save(hire, callback) {
    if (hire.id) {
      // It's an update
      this.http.put(`${this.endpoint}/hire/${hire.id}`, hire)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/hires`, hire)
        .subscribe(response => {
          callback(true);
        });
    }
  }

}
