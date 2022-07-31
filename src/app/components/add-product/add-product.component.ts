import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products:Product[]
  constructor(private route:Router) { }
  formModel:Product= new Product(0,"","","",0,"",false,0,new Date,new Date,0)
  ngOnInit(): void {
    this.onSubmit();
  }
  onSubmit(){
    console.log(this.formModel)
  }

}
