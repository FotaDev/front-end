import { Component, OnInit } from '@angular/core';
import {HiresService} from '../services/hires.service';
import {NewHires} from './newhire';
import {Observable} from 'rxjs/RX';
import {Hire} from "../logic/Hire";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-newhire',
  templateUrl: './newhire.component.html',
  styleUrls: ['./newhire.component.sass']
})
export class NewhireComponent implements OnInit {

  hire : Hire;
  routingSubscription: any;

  constructor(private hireservice : HiresService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.hire = new Hire();

    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params["id"]);

      if(params["id"])
      {
        this.hireservice.get(params["id"], response => {
          this.hire = response;
        });
      }
    });
  }

  save()
  {
    this.hireservice.save(this.hire, result => {
      if(result)
      {
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnDestroy()
  {
    this.routingSubscription.unsubscribe();
  }

}
