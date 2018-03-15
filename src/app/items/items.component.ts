import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Items} from '../interface/items';
import {ItemsService} from "../services/items.service";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  items: Items[];
  mode = "Observable";
  errorMessage: string;


  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    let timer =Observable.timer(0,5000);
    timer.subscribe(() => this.getItems());
  }

  getItems(){
    this.itemsService.getItems().subscribe(items => this.items = items, error => this.errorMessage = <any>error);

}
}
