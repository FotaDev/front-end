import {Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import {Items} from '../interface/items';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ItemsService} from "../services/items.service";
import {Sizes} from '../interface/sizes';
import {SizesService} from "../services/sizes.service";

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.sass']
})
export class ShowItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,private itemsService:ItemsService,http : Http,private sizesService : SizesService) { }
  
  sizes: Sizes[];
  errorMessage: string;
  @Input()
  item: Items;
  
  getSizes(){
    this.sizesService.getSizes().subscribe(sizes => this.sizes = sizes, error => this.errorMessage = <any>error);

}

  ngOnInit(): void {
  
    let timer =Observable.timer(0,5000);
    timer.subscribe(() => this.getSizes());
    
   let itemsRequest = this.route.params.flatMap((params: Params)=> this.itemsService.getItem(+params['id']));
   itemsRequest.subscribe(response => this.item = response.json());
  
}

}

