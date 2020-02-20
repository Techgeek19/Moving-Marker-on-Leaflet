import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { HttpClientModule} from '@angular/common/http' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule, NbToastrModule, NbDialogModule, NbDialogService} from '@nebular/theme';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostService } from './post.service';
// import { HomeComponent } from './home/home.component';
import {NgbModule , NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { ShowComponent } from './list/show/show.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PagenotfoundComponent,
    ShowComponent ,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    FormsModule ,
    HttpClientModule,
    NbToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,  
    NgbTypeaheadModule,
    LeafletModule.forRoot()

  ],
  providers: [PostService],
  bootstrap: [AppComponent],
  entryComponents: [ShowComponent]
})
export class AppModule { }
