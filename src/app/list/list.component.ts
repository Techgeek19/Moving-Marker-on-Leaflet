import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostService } from '../post.service';
import { NbDialogService } from '@nebular/theme';
import { Product } from '/home/roadcast/nebularpro/src/app/product';
import { HomeComponent } from '../home/home.component';
import { ShowComponent } from './show/show.component';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { state } from '@angular/animations';
// import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

let states = [];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  // array (get)
  public newProduct: Product[]  = [];
  public model: any;
  

  constructor(private postService: PostService, private dialogService: NbDialogService) { }
  
  ngOnInit() {  
    this.postService.getList()
    .subscribe(data =>  {
      this.newProduct = data,
      console.log(this.newProduct)
      states = this.newProduct.map(x => x.name);
      console.log(states) 
    })
    // this.productname = this.newProduct.map( x => x.name);
    } 
  
  applyFilter(any : any){
    // console.log(any)
     this.newProduct = states.filter(x => { x.name === any.toLowerCase()
    console.log(x.name) 
    console.log(this.newProduct)
     })
  }
    
  onEdit(pro: Product){
    console.log(pro)
    this.dialogService.open(ShowComponent,{
      context: {
        editProduct : pro,
      }
    }) 
  }

  onDelete(data){
    console.log(data)
  }

  formatter = (result: string) => result.toUpperCase();
 
  // console.log(states) 
   
  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term === '' ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))
      
}
