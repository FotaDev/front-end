import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Hires} from '../interface/hires';
import {HiresService} from "../services/hires.service";
import {Observable} from 'rxjs/Rx';
import {Angular2TokenService} from "angular2-token";
import {CommonModule} from '@angular/common';
import {Hire} from "../logic/Hire";
import {Router} from "@angular/router";

@Component({
  selector: 'app-myhires',
  templateUrl: './myhires.component.html',
  styleUrls: ['./myhires.component.sass']
})
export class MyhiresComponent implements OnInit {

  // array for storing hires loaded inside ngOnInit
  hires : Hires[];
  mode = "Observable";
  errorMessage: string;

  constructor(private router: Router, private hiresService: HiresService,
              public authTokenService: Angular2TokenService) {
  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getHires());
  }

  goDetails(hire: Hire)
  {
    this.router.navigate(["/hire", hire.id]);
  }

  getHires() {
    this.hiresService.getList(list => {
      this.hires = list;
    })
  }
}
