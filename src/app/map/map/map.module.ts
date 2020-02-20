import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
// import {LeafletDrawModule} from '@asymmetrik/ngx-leaflet-draw';
import * as L from 'leaflet';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // LeafletDrawModule,
    LeafletModule,

  ]
})
export class MapModule { }
