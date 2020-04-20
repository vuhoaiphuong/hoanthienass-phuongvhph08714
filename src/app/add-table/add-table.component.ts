import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
customer : Customer = new Customer();
  showModal  :Boolean= false;
  constructor(
     private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
  }
addCustomer(){
    this.customerService.addCustomer(this.customer).subscribe(data =>{
       this.router.navigateByUrl("/customer")
    } );
  }
  clickAdd(){
    this.showModal = true;
  }
}