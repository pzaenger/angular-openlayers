import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GeoService } from '../model/geo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  geolocation: Geolocation;

  constructor(public geo: GeoService) {
  }

  ngOnInit() {
    this.geolocation = navigator.geolocation;
  }

  ngAfterViewInit() {
    this.geo.updateSize();
  }

  locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geo.setView(10, [position.coords.longitude, position.coords.latitude]);
      });
    }
  }
}
