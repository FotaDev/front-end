import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MyhiresComponent } from './myhires/myhires.component'
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./guards/auth.guard";
import { NewhireComponent } from './newhire/newhire.component';  
import { ItemsComponent } from './items/items.component'; 
import { ShowHireComponent } from './show-hire/show-hire.component';
import { ShowItemComponent } from './show-item/show-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myhires',
    component: MyhiresComponent ,
    canActivate: [AuthGuard]
  },
  {
    path: 'myhires/:id',
    component: ShowHireComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newhire',
    component: NewhireComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'items',
    component: ItemsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'items/:id',
    component: ShowItemComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})



export class AppRoutingModule { }
