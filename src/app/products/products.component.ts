import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private http : HttpClient, private router : Router){}
  ngOnInit(): void {
    console.log('====================================');
    console.log(localStorage.getItem('kc.token'));
    console.log('====================================');
    this.http.get("http://localhost:8098/products").subscribe(
      {
        next : data=>{
            this.products = data
        },
        error :err=>{
          console.log('====================================');
          console.log(localStorage.getItem('kc.token'));
          console.log('====================================');
          console.log('====================================');
          console.log(err.message);
          console.log('====================================');
        }
      }
    )
  }

  products : any
}
