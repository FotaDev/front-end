import { Component, OnInit , Injectable, PLATFORM_ID ,Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Items} from '../interface/items';
import {ItemsService} from "../services/items.service";
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router'
import {Ng2SearchPipeModule } from 'ng2-search-filter';
import {AsyncLocalStorage } from 'angular-async-local-storage';
import {isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
@Injectable()
export class ItemsComponent implements OnInit {

  items: Items[];
  mode = "Observable";
  errorMessage: string;
  public pickedItem :any = [];
  basketTotal :number;
  



  constructor(private itemsService: ItemsService,
              private router:Router,
              protected localStorage: AsyncLocalStorage,@Inject(PLATFORM_ID) 
              private platformId:Object) { }

  ngOnInit() {

    let timer =Observable.timer(0,5000);
    timer.subscribe(() => this.getItems());
  
  }


  itemSave(array){

    this.addToArray(array);
    this.getBasketlength();
  }


  getBasketlength(){
  var retrievedObject = localStorage.getItem('joe');
  var parsedTotal = JSON.parse(retrievedObject);
  this.basketTotal = parsedTotal.length;
  }


  getItems(){
    this.itemsService.getItems().subscribe(items => this.items = items, error => this.errorMessage = <any>error);
}

  addToArray (item){

  this.pickedItem.push(item);
  var array = this.pickedItem;
  this.addToStorage(array);
  
}

  addToStorage(array){

        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem( 'joe', JSON.stringify(array));
       }
}



showItem(){

  this.localStorage.getItem<any>('item').subscribe((item) => {
    item.description
  });
}

goToShow(item: Items): void{
  let link = ['/items',item.id];
  this.router.navigate(link);
  }
}
