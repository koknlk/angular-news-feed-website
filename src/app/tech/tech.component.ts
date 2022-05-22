import { Component, OnInit } from '@angular/core';
import {FeednewsapiservicesService} from '../service/feednewsapiservices.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private _services:FeednewsapiservicesService) { }

  techfeed:any = [];

  ngOnInit(): void {

    this._services.techNews().subscribe((results) => {
      this.techfeed = results.articles;
    });

  }

}
