import { Component, OnInit, } from '@angular/core';
import { Product } from '/home/roadcast/nebularpro/src/app/product';
import { PostService } from '../post.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  // productModel= new Product(0,'','', 0, 0); 
  // object (post)
  public newProduct: Product  = <Product> {};
  index: any;

  constructor(private postService: PostService, private toaster: NbToastrService) { }

  ngOnInit() {
  }

  onSubmit()  {
    this.postService.postdata(this.newProduct)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error', error)
    )
    console.log(this.newProduct)
    this.toaster.show(
      'Successfully Added',
      `Addded product: ${this.newProduct.name}`,
    )  
  }
    
}


