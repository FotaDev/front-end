import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    group_id: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  groups;

  constructor(public authSerivce: AuthService, private http: Http) {
    http.get('http://localhost:3000/groups.json')
    .subscribe(res => this.groups= res.json());
   }

  ngOnInit() {}


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
