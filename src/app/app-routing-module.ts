import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Accounts } from './accounts/accounts';
import { Cards } from './cards/cards';

const routes: Routes = [
  {path:'home',component:Home},
  {path:'accounts',component:Accounts},
  {path:'cards',component:Cards}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
