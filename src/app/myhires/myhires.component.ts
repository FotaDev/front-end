import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Hires} from '../interface/hires';
import {HiresService} from "../services/hires.service";
import {Observable} from 'rxjs/Rx';
import {Angular2TokenService} from "angular2-token";
import { CommonModule } from '@angular/common';  
import {Router} from '@angular/router'

@Component({
  selector: 'app-myhires',
  templateUrl: './myhires.component.html',
  styleUrls: ['./myhires.component.sass']
})
export class MyhiresComponent implements OnInit {

  hires: Hires[];
  mode = "Observable";
  errorMessage: string;


  

  constructor(private hiresService: HiresService, public authTokenService:Angular2TokenService,private router:Router) { }

  ngOnInit() {

    let timer =Observable.timer(0,5000);
    timer.subscribe(() => this.getHires());
  }

  getHires(){
      this.hiresService.getHires().subscribe(hires => this.hires = hires, error => this.errorMessage = <any>error);

 }

 goToShow(hire: Hires): void{
  let link = ['/myhires',hire.id];
  this.router.navigate(link);
  }
}
