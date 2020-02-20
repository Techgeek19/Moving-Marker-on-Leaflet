import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
// import './node_modules/leaflet-moving-marker/demo';
// import '../../../node_modules/leaflet.fullscreen/Control.FullScreen';
import '../../../node_modules/Leaflet-MovingMaker/MovingMarker';
// import '../../../node_modules/leaflet-moving-marker/index';
// import '../../../node_modules/Leaflet-MovingMaker/examples/script'; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit {
  
  private map : any;
  // private popup: any;
  constructor() { } 
  
  lat: 28.396;
  long: 77.958;
  ngOnInit() {
    this.initMap(),
    // this.onMapReady(this.map)
    // marker2.addTo(this.map);
    this.map.nativeElement
  }
  ngAfterViewInit(){
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  
  // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

});  tiles.addTo(this.map);
}
  private initMap(): void {
    this.map = L.map('map', {
      center: L.latLng(28.6139, 77.2090),
      zoom: 15,
});

const myicon = L.icon({
  iconSize: [ 45, 45 ],
  iconAnchor: [ 13, 0 ],
  // specify the path here
  iconUrl: '../../assets/marker.png'
})
  
  let marker = L.marker([28.6139, 77.2090], {icon : myicon}).addTo(this.map);
  let popup = marker.bindPopup('<b> New Delhi!</b><br/> You are in the house bud');


// *******************************  MOVING MARKER  ************************************************
   
    let newLatLng = L.latLng([48.8567, 2.3508]);
    console.log(newLatLng)
    let myMovingMarker = L.Marker.movingMarker(newLatLng, {
      
    });

    myMovingMarker.start();

// **********************************************************************************

  let circle = new L.Circle(new L.LatLng(28.6330, 77.2194), 500, {
    color: 'red',
    fillColor: '#f03',  
    fillOpacity: 0.5
  }).addTo(this.map).bindPopup("Rajiv Chowk");

  // let popup2 = new L.Popup();
  // function onMapClick(e:any) {
  //   let marker2 = L.marker([26.6139, 78.2090]);
  //   popup2
  //     .setLatLng(e.latlng)
  //     .setContent("You clicked the map at " + e.latlng.toString())
  //     .openOn(this.map)  
  // } this.map.on('click', onMapClick);
};


  private onMapReady(map:L.Map) {
    L.control.fullscreen({
        position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
        title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
        titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
        content: null, // change the content of the button, can be HTML, default null
        forceSeparateButton: true, // force seperate button to detach from zoom buttons, default false
        forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
        fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
      }).addTo(map);
      
  map.on('enterFullscreen', () => map.invalidateSize());
  map.on('exitFullscreen', () => map.invalidateSize());
  }
}