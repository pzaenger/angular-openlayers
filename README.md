# angular-openlayers

Example of how to use [Angular](https://angular.io/) 14 and [OpenLayers](https://openlayers.org/) 7.

The project uses [Angular Material](https://material.angular.io/) and implements
the [drag-and-drop interaction](https://openlayers.org/en/latest/examples/drag-and-drop.html) of OpenLayers in order to
add GeoJSON to the map. In addition, it includes a Dockerfile using [PM2](https://pm2.keymetrics.io/) to serve the
bundled app.

## Screenshots

![Preview 1](https://raw.githubusercontent.com/pzaenger/angular-openlayers/master/preview-1.png)

![Preview 2](https://raw.githubusercontent.com/pzaenger/angular-openlayers/master/preview-2.png)

## Development

```
npm install
npm start
```

## Production

```
npm run build
docker build -t <name>:<tag> .
docker run <name>:<tag>
```
