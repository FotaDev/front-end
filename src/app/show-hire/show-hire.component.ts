import { Component, OnInit ,Input     } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hires               } from '../interface/hires';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HiresService} from "../services/hires.service";

@Component({
  selector: 'app-show-hire',
  templateUrl: './show-hire.component.html',
  styleUrls: ['./show-hire.component.sass']
})
export class ShowHireComponent implements OnInit {

  constructor(private route: ActivatedRoute,private hiresService: HiresService,http : Http) { }

  @Input()
  hire: Hires;

  ngOnInit(): void {
    
   let hiresRequest = this.route.params.flatMap((params: Params)=> this.hiresService.getHire(+params['id']));
   hiresRequest.subscribe(response => this.hire = response.json());
  
}

}
