import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map} from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class MgmtServiceService {

  productUrl="http://localhost:8080/api/pro";
  categoryUrl="http://localhost:8080/api/category"

  constructor(private httpClient:HttpClient) { }
  
  getAllProducts() :Observable<Product[]>{
    return this.httpClient.get<getAllProducts>(this.productUrl).pipe(map(data=>data._embedded.product1s));
}

getAllCategory() :Observable<ProductCategory[]>{
  return this.httpClient.get<getAllCategory>(this.categoryUrl).pipe(map(data1=>data1._embedded.productCategories));
}
}




 interface getAllProducts{
    _embedded:{
      product1s:Product[]
    }
 }

 interface getAllCategory{
  _embedded:{
    productCategories:ProductCategory[]
  }
 }