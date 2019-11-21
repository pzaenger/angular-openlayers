import { AfterViewInit, Component } from '@angular/core';
import { Geo } from '../model/geo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  geo: Geo;

  constructor() {
  }

  ngAfterViewInit() {
    // Locate user's position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geo = new Geo({ zoom: 10, center: [position.coords.longitude, position.coords.latitude] });
      });
    } else {
      this.geo = new Geo();
    }
  }
}
