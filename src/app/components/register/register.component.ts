import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { Http } from '@angular/http';
import { Groups} from '../../interfaces/groups';
import {GroupsService} from "../../services/groups.service";
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  groups: Groups[];
  mode = "Observable";
  errorMessage: string;


  signUpUser = {
    email: '',
    password: '',
    group_id: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(public authService:AuthService, private groupsService: GroupsService,private router: Router) { }

  ngOnInit() {

    let timer =Observable.timer(0,5000);
    timer.subscribe(() => this.getGroups());
  }



  getGroups(){
          
    this.groupsService.getGroups()
    .subscribe(groups => this.groups = groups, error => this.errorMessage = <any>error);
}


  onSignUpSubmit(){

    this.authService.registerUser(this.signUpUser).subscribe(

        (res) => {

          if (res.status == 200){
            this.onFormResult.emit({signedUp: true, res});
            console.log("register works");
            alert("Registration Succesful");
            this.router.navigate(['profile']);

          }

        },

        (err) => {
          this.onFormResult.emit({signedUp: false, err});
          console.log(err.json())
          console.log("register dosnt work");
          alert("Registration Not Succesful");
        }
    )

  }

}
