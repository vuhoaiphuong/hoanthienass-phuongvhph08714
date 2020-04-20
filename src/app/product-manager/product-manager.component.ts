import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
   selected: Customer;
  customers: Customer[];
  constructor(
     private customerService: CustomerService
  ) {
     console.log('constructor')
   }

  ngOnInit() {
   this.getCustomers();
  }
showDetail(customer){ 
    this.selected = customer;
  }
 
  getCustomers(){
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    })
    // this.customers = this.customerService.getCustomers();
  }
  removeItem(id){
    this.customers = this.customers.filter(customer => customer.id != id)

  }
}