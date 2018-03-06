import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  hires;

  constructor(private http: Http) {
    http.get('http://localhost:3000/hires.json')
      .subscribe(res => this.hires= res.json());
   }

  ngOnInit() {
  }

}
