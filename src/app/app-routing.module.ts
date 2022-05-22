import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {path: '', component:MainHeadingComponent}, //Home
  {path: 'tech', component:TechComponent}, //Tech News

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
