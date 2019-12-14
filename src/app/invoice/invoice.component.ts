import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  custName = new FormControl(['',])
  constructor() { }
  ngOnInit() {

  }


}


