import { Component, OnInit, NgModule } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit{
  pageTitle: string = "Statut Geolocation"
  pageUrl: string= "/admin/geolocations"

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 7,
    center: new Leaflet.LatLng(7.5455112, -5.547545)
  };
  ngOnInit(): void {
    this.options;
  }
}

export const getMarkers = (): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(5.3675763080052254, -4.010577917493129), {
      icon: new Leaflet.Icon({
        iconSize: [60, 60],
        iconAnchor: [35, 70],
        iconUrl: 'assets/img/icons/markerGreen.png',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions).bindPopup('<h2>new popup</br> more complicated</h2>').openPopup(),
    new Leaflet.Marker(new Leaflet.LatLng(7.690839266753059, -5.035582902204658), {
      icon: new Leaflet.Icon({
        iconSize: [60, 60],
        iconAnchor: [35, 70],
        iconUrl: 'assets/img/icons/markerOrange.png',
      }),
      title: 'Riva'
    } as Leaflet.MarkerOptions).bindPopup('content one').openPopup(),
    
    new Leaflet.Marker(new Leaflet.LatLng(6.556156570048604, -5.016245958692018), {
      icon: new Leaflet.Icon({
        iconSize: [60, 60],
        iconAnchor: [35, 70],
        iconUrl: 'assets/img/icons/markerRed.png',
      }),
      title: 'Riva'
    } as Leaflet.MarkerOptions).bindPopup('content two').openPopup(),
  ] as Leaflet.Marker[];
};

export const getRoutes = (): Leaflet.Polyline[] => {
  return [
    new Leaflet.Polyline([
      new Leaflet.LatLng(5.3675763080052254, -4.010577917493129),
      new Leaflet.LatLng(7.690839266753059, -5.035582902204658),
      new Leaflet.LatLng(6.556156570048604, -5.016245958692018),
    ] as Leaflet.LatLng[], {
      color: '#0d9148'
    } as Leaflet.PolylineOptions)
  ] as Leaflet.Polyline[];
};

export const getLayers = (): Leaflet.Layer[] => {
  return [
    // Basic style
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    // Pastel style, remove if you want basic style. Uncomment if you want pastel style.

    // new Leaflet.TileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key={your_key}', {
    //   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    // } as Leaflet.TileLayerOptions),
    ...getMarkers(),
    ...getRoutes(),
    ...getPolygons()
  ] as Leaflet.Layer[];
};

export const getPolygons = (): Leaflet.Polygon[] => {
  return [
    new Leaflet.Polygon([
      new Leaflet.LatLng(5.3675763080052254, -4.010577917493129),
      new Leaflet.LatLng(7.690839266753059, -5.035582902204658),
      new Leaflet.LatLng(6.556156570048604, -5.016245958692018),
      new Leaflet.LatLng(5.3675763080052254, -4.010577917493129)
    ] as Leaflet.LatLng[],
      {
        fillColor: '#eb530d',
        color: '#eb780d'
      } as Leaflet.PolylineOptions)
  ] as Leaflet.Polygon[];
};

