import { Component, OnInit } from '@angular/core';
import {FeednewsapiservicesService} from '../service/feednewsapiservices.service';

@Component({
  selector: 'app-main-heading',
  templateUrl: './main-heading.component.html',
  styleUrls: ['./main-heading.component.css']
})
export class MainHeadingComponent implements OnInit {
  mainheadline: any;

  constructor(private _services:FeednewsapiservicesService) {

    //Display data
    const mainheadline = [];

   }

  ngOnInit(): void {
    this._services.topHeadlines().subscribe((results) => {
      console.log(results);
      this.mainheadline = results.articles;
    })
  }

}
