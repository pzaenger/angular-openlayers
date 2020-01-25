import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Geo } from '../model/geo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  geo: Geo;
  geolocation;

  constructor() {
  }

  ngOnInit() {
    this.geo = new Geo();
    this.geolocation = navigator.geolocation;
  }

  ngAfterViewInit() {
    this.geo.map.updateSize();
  }

  locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geo.setView(10, [position.coords.longitude, position.coords.latitude]);
      });
    }
  }
}
