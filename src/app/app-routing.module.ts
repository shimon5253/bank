import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component'
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
    {path: 'login' , component:LoginComponent},
    {path: 'summary/:bankUserId' , component:SummaryComponent},

    {path:'', redirectTo:'/login', pathMatch: 'full'},
    {path:'**', redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }