import * as L from 'leaflet';

// export declare var MovingMarker: any;
// export declare function movingMarker(startLatLng: L.LatLng, options: any): any;
// export declare var MovingMarker: any;
// export declare function MovingMarker(startLatLng: L.LatLng, options: any): any;

declare module 'leaflet' {  
   namespace control {
       function fullscreen(v: any);
     }

// **********************************************************************

     namespace Marker{
      function movingMarker(startLatLng: L.LatLng, options: any);
    }
// **********************************************************************

    interface MovingMarkerDestination {
    latLng: L.LatLng;
    duration: number;
}

    interface MovingMarkerOptions {
    destinations?: Array<MovingMarkerDestination>;
}

}

// Import Leaflet into L in case you want to reference Leaflet types
// import * as L from 'leaflet';

// Declare the leaflet module so we can modify it
// declare module 'leaflet' {

  // We want to alter the control namespace
  // namespace control {

    // Define minimal type information for the coordinates function
    // function coordinates(v: any);

  // }
// }
