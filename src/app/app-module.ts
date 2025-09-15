import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { Leftsidebar } from './leftsidebar/leftsidebar';
import { Rightsidebar } from './rightsidebar/rightsidebar';
import { Home } from './home/home';
import { Accounts } from './accounts/accounts';
import { Cards } from './cards/cards';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumtowordPipe } from './numtoword-pipe';
import { InrPipe } from './inr-pipe';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    App,
    Dashboard,
    Leftsidebar,
    Rightsidebar,
    Home,
    Accounts,
    Cards,
    NumtowordPipe,
    InrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
  
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    
  ],
  bootstrap: [App]
})
export class AppModule { }
