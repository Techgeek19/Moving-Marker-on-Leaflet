import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'product', redirectTo: '/productlist', pathMatch: 'full'} ,
  { path: 'productlist', component: ListComponent} ,
  { path: 'map', component: MapComponent} ,
  { path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ListComponent, PagenotfoundComponent, MapComponent]
