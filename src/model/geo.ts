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

/**
 * Geographical map containing some basic controls and two sources for its base layer.
 */
export class Geo {

  /** Map. */
  readonly map: Map;

  /** Layer. */
  readonly layerTile: LayerTile;

  /** Sources. */
  readonly sources: { readonly osm: SourceOsm; readonly stamen: SourceStamen; };

  /**
   * Initialise the map.
   * @param view View with initial center and zoom.
   */
  constructor(view: { zoom: number; center: [number, number]; } = { zoom: 2, center: [0, 0] }) {
    this.sources = {
      osm: new SourceOsm(),
      stamen: new SourceStamen({ layer: 'toner' })
    };

    this.layerTile = new LayerTile({
      source: this.sources.osm
    });

    this.map = new Map({
      target: 'map',
      interactions: defaultInteractions().extend([
        new PinchZoom()
      ]),
      layers: [
        this.layerTile
      ],
      view: new View({
        center: fromLonLat(view.center),
        zoom: view.zoom,
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
   * @param zoom Zoom.
   * @param center Center in long/lat.
   */
  setView(zoom: number, center: [number, number]) {
    this.map.getView().setZoom(10);
    this.map.getView().setCenter(fromLonLat(center));
  }

  /**
   * Sets the source of the base layer.
   * @param source Source.
   */
  setSource(source: 'osm' | 'stamen') {
    this.layerTile.setSource(this.sources[source]);
  }
}
