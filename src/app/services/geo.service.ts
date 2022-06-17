import Map from 'ol/Map';
import View from 'ol/View';
import LayerTile from 'ol/layer/Tile';
import ZoomToExtent from 'ol/control/ZoomToExtent';
import FullScreen from 'ol/control/FullScreen';
import ScaleLine from 'ol/control/ScaleLine';
import Attribution from 'ol/control/Attribution';
import SourceOsm from 'ol/source/OSM';
import SourceStamen from 'ol/source/Stamen';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import { defaults as defaultInteractions, PinchZoom } from 'ol/interaction';
import { Injectable } from '@angular/core';

/**
 * Geographical map containing some basic controls and two sources for its base layer.
 */
@Injectable({
  providedIn: 'root'
})
export class GeoService {

  /** OL-Map. */
  readonly map: Map;

  /** Basic layer. */
  readonly layerTile: LayerTile<SourceOsm>;

  /** Sources for basic layer. */
  readonly sources: { readonly osm: SourceOsm; readonly stamen: SourceStamen; };

  /**
   * Initialise the map.
   */
  constructor() {
    this.sources = {
      osm: new SourceOsm(),
      stamen: new SourceStamen({ layer: 'toner' })
    };

    this.layerTile = new LayerTile({
      source: this.sources.osm
    });

    this.map = new Map({
      interactions: defaultInteractions().extend([
        new PinchZoom()
      ]),
      layers: [
        this.layerTile
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
        constrainResolution: true
      }),
      controls: defaultControls().extend([
        new Attribution(),
        new ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122,
            848966.9639063801, 5936863.986909639
          ]
        }),
        new FullScreen(),
        new ScaleLine({
          bar: true,
          minWidth: 150
        })
      ])
    });
  }

  /**
   * Sets the view to the accordant zoom and center.
   *
   * @param zoom Zoom.
   * @param center Center in long/lat.
   */
  setView(zoom: number, center: [number, number]): void {
    this.map.getView().setZoom(10);
    this.map.getView().setCenter(fromLonLat(center));
  }

  /**
   * Updates target and size of the map.
   *
   * @param target HTML container.
   */
  updateSize(target = 'map'): void {
    this.map.setTarget(target);
    this.map.updateSize();
  }

  /**
   * Sets the source of the base layer.
   *
   * @param source Source.
   */
  setSource(source: 'osm' | 'stamen'): void {
    this.layerTile.setSource(this.sources[source]);
  }
}
