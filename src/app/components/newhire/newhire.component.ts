import { Component, OnInit } from '@angular/core';
import {HiresService} from '../../services/hires.service';
import {NewHires} from './newhire';
import {Observable} from 'rxjs/RX';
import {Router} from '@angular/router';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-newhire',
  templateUrl: './newhire.component.html',
  styleUrls: ['./newhire.component.css']
})
export class NewhireComponent implements OnInit {

  constructor(private authTokenService: Angular2TokenService,private hireservice : HiresService, private router: Router) { }

  collectionSet = {
    collection: ''
    
  };

  returnSet = {
    return: '',
  };

  hire = new NewHires;
  submitted: boolean = false;
  reference = Math.floor(Math.random()*90000) + 10000;
  status = "not collected yet";
  band = 2;



  setSomeHireProperties(){

    this.hire.group_id = this.authTokenService.currentUserData.group_id;
    this.hire.user_id = this.authTokenService.currentUserData.id;
    this.hire.reference = this.reference;
    this.hire.status = this.status;
    this.hire.band = this.band;
  }

  createHire(){

    this.submitted = true;
    this.setSomeHireProperties();
    console.log(this.hire)
    this.hireservice.createHire(this.hire).subscribe( data => {return true},suc => {this.router.navigate(['/myhires']) }); error => {console.log("Error saving hire"); return Observable.throw(error)};
  }

  onSignInSubmit(){

    this.setSomeHireProperties();

    console.log(this.hire);
  }

  ngOnInit() {
  }

}
