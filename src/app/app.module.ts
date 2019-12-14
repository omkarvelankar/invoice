import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ClientmasterComponent } from './clientmaster/clientmaster.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientinvoicemasterComponent } from './clientinvoicemaster/clientinvoicemaster.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    ClientmasterComponent,
    ClientinvoicemasterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
