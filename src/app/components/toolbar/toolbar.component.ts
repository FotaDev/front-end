import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public tokenAuthService:Angular2TokenService,public authService:AuthService, private router:Router) { }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['']));
  }

  ngOnInit() {
  }

}
