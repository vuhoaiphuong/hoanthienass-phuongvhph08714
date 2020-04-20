import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Customer } from './Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService{
    api='https://5e7db49afa19eb0016519eb6.mockapi.io/customer';
    customers =data;
    constructor(
    private http: HttpClient
        ){}
        getCustomers():Observable<Customer[]>{
            return this.http.get<Customer[]>(this.api);
          }
           getCustomer(id): Observable<Customer>{
             console.log(id);
            return this.http.get<Customer>(`${this.api}/${id}`);
            // return this.products.find(product => product.id == id);
          }
          removeProduct(id){
            return this.customers.filter(customer => customer.id !== id);
          }
          addCustomer(customer){
            return this.http.post<Customer>(`${this.api}`, customer);
            // const newProduct = { id: 5, ...product};
            // this.products.push(newProduct);
            // console.log(this.products)
          }
          updateCustomer(customer){
             return this.http.put<Customer>(`${this.api}/${customer.id}`, customer);
          }
        }
