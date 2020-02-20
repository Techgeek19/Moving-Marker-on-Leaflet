import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {

  editProduct: any;

  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<ShowComponent>) { }

  ngOnInit() {
    // console.log(this.editProduct);
  }
  close(){
    this.dialogRef.close()
  }
  
}
