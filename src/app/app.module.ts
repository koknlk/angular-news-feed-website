import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeadingComponent } from './main-heading/main-heading.component';

import {HttpClientModule} from '@angular/common/http';
import {FeednewsapiservicesService} from './service/feednewsapiservices.service';
import { TechComponent } from './tech/tech.component';

//load-balancer
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';



@NgModule({
  declarations: [
    AppComponent,
    MainHeadingComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [FeednewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
