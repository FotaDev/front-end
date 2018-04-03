import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { Angular2TokenService } from 'angular2-token';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {GroupsService} from "./services/groups.service";
import { ProfileComponent } from './components/profile/profile.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import { MyhiresComponent } from './components/myhires/myhires.component';
import { NewhireComponent } from './components/newhire/newhire.component';
import {HiresService} from "./services/hires.service";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyhiresComponent,
    NewhireComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
   
    
  ],
  providers: [Angular2TokenService, AuthService,GroupsService,AuthGuard,HiresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
