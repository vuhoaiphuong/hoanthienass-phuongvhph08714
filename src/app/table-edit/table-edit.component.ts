import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent implements OnInit {
customer: Customer;
  constructor(
     private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
     this.getCustomer();
  }
  getCustomer(){
    this.route.params.subscribe(param => {
        this.customerService.getCustomer(param.customerID).subscribe(data => this.customer = data);
    })
  }
  updateCustomer(){
      this.customerService.updateCustomer(this.customer).subscribe(data => {
        this.router.navigateByUrl("/admin/product-manager")
      });
  }
}