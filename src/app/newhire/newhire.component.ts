import { Component, OnInit, ViewChild } from '@angular/core';
import {HiresService} from '../services/hires.service';
import {NewHires} from './newhire';
import {Observable} from 'rxjs/RX';
import {Router} from '@angular/router';


@Component({
  selector: 'app-newhire',
  templateUrl: './newhire.component.html',
  styleUrls: ['./newhire.component.sass']
})
export class NewhireComponent implements OnInit {



  hire = new NewHires;
  submitted: boolean = false;

  


  constructor( private hireservice : HiresService, private router: Router) { }

  createHire(hire){

    this.submitted = true;
    this.hireservice.createHire(hire).subscribe( data => {return true},suc => {}); error => {console.log("Error saving hire"); return Observable.throw(error)};


  }

  ngOnInit() {
  }

 

}

// this.router.navigate(['/myhires']) to get to myhires page