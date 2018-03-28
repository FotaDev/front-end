import { Component, OnInit,Injectable, PLATFORM_ID ,Inject } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { isPlatformBrowser } from '@angular/common';
import {Items} from '../interface/items';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})

@Injectable()
export class ShoppingCartComponent implements OnInit {

constructor(protected localStorage: AsyncLocalStorage,@Inject(PLATFORM_ID) 
            private platformId:Object, public itemsComp: ItemsComponent) {   }
  
 public product :any = [];
 errorMessage: string;


 getBasket(){ 
  var retrievedObject = localStorage.getItem('joe');
  // CONVERT STRING TO REGULAR JS OBJECT
  var parsedObject = JSON.parse(retrievedObject);
  // ACCESS DATA
  console.log(parsedObject+"joe");
  for (let entry of parsedObject) {
        this.product.push(entry);
    }
}

clearStorage(){
  
  localStorage.removeItem('joe');
  this.itemsComp.pickedItem.splice(0,this.itemsComp.pickedItem.length);
  this.product.splice(0,this.product.length);
  console.log(this.product);
}

removeItem(row){

let rowIndex = this.product.indexOf(row);
console.log(rowIndex);

  if (rowIndex !== -1) {
    this.product.splice(rowIndex, 1);
  }
    console.log(this.product);
    localStorage.removeItem('joe');
    this.itemsComp.pickedItem.splice(0,this.itemsComp.pickedItem.length);
    this.itemsComp.addToStorage(this.product);
}
  
ngOnInit() {

}


}
