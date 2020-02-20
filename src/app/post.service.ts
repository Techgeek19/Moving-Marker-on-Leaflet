import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Product } from './product';
import { Observable } from 'rxjs/Observable' ;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  url= 'http://127.0.0.1:5000/api/product'

  constructor(private http: HttpClient) {}
  //  post request
  postdata(product: Product){
    return this.http.post<Product>(this.url, product);
  }

  // getting product
  getList():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  

}
