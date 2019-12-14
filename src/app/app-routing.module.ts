import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { ClientmasterComponent } from './clientmaster/clientmaster.component';
import { ClientinvoicemasterComponent } from './clientinvoicemaster/clientinvoicemaster.component';



const routes: Routes = [
  {path: 'invoice' , component: InvoiceComponent},
  {path: 'clientmaster', component: ClientmasterComponent},
  {path: 'clientinvoicemaster', component: ClientinvoicemasterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
