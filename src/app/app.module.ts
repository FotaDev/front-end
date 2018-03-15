import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { AuthService} from "./services/auth.service";
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard} from "./guards/auth.guard";


import {GroupsService} from "./services/groups.service";
import {HiresService} from "./services/hires.service";
import {ItemsService} from "./services/items.service";
import {SizesService} from "./services/sizes.service";
import {OrdersService} from "./services/orders.service";

import { MyhiresComponent } from './myhires/myhires.component';
import { CommonModule } from '@angular/common';
import { NewhireComponent } from './newhire/newhire.component';
import { ItemsComponent } from './items/items.component';
import { ShowHireComponent } from './show-hire/show-hire.component';
import { ShowItemComponent } from './show-item/show-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    MyhiresComponent,
    NewhireComponent,
    ItemsComponent,
    ShowHireComponent,
    ShowItemComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MaterializeModule,
    FormsModule,
    CommonModule
  ],
  providers: [ Angular2TokenService,AuthService,AuthGuard,GroupsService,HiresService,ItemsService,SizesService,OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
