import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlTileLayer from 'ol/layer/Tile';
import OlXYZ from 'ol/source/XYZ';

import { fromLonLat } from 'ol/proj';

/**
 * Geo.
 */
export class Geo {

  /* Map. */
  public readonly olMap: OlMap;

  /**
   * Initialise the map.
   * @param view View with initial center and zoom.
   */
  constructor(view: { zoom: number; center: [number, number]; } = { zoom: 2, center: [0, 0] }) {
    this.olMap = new OlMap({
      target: 'map',
      layers: [
        new OlTileLayer({
          source: new OlXYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new OlView({
        center: fromLonLat(view.center),
        zoom: view.zoom
      })
    });
  }
}
