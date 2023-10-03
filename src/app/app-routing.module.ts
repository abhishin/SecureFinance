import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { AboutUsComponent } from './includes/about-us/about-us.component';
import { EmicalculatorComponent } from './includes/emicalculator/emicalculator.component';

const routes: Routes = [
  {
    path:'',component:HomeDashboardComponent,
    children:[
      {path:'about',component:AboutUsComponent},
      {path:'Emi',component:EmicalculatorComponent},
      {path:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
