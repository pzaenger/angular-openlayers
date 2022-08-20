# angular-openlayers

Simple example of how to use [Angular](https://angular.io/) 14 and [OpenLayers](https://openlayers.org/) 7. The project also
includes [Angular Material](https://material.angular.io/) and a Dockerfile using [PM2](https://pm2.keymetrics.io/) to
serve the app. And as always, it's just a short demo - a lot could be done better or differently.

![alt text](https://raw.githubusercontent.com/pzaenger/angular-openlayers/master/preview-1.png)

![alt text](https://raw.githubusercontent.com/pzaenger/angular-openlayers/master/preview-2.png)

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
