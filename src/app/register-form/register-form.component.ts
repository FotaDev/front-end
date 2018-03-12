import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Http } from '@angular/http';
import { Groups} from '../interface/groups';
import {GroupsService} from "../services/groups.service";
import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

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


  constructor(public authSerivce: AuthService, private groupsService: GroupsService) {
  }

  ngOnInit() {

    let timer =Observable.timer(0,5000);
    timer.subscribe(() => this.getGroups());
  }

  getGroups(){
      this.groupsService.getGroups().subscribe(groups => this.groups = groups, error => this.errorMessage = <any>error);

}
  onSignUpSubmit() {

    this.authSerivce.registerUser(this.signUpUser).subscribe(

        (res) => {

          if (res.status === 200) {
            this.onFormResult.emit({signedUp: true, res});
          }

        },

        (err) => {
          console.log(err.json());
          this.onFormResult.emit({signedUp: false, err});
        }
    );

  }
}
