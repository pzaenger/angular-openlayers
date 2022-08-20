FROM keymetrics/pm2:16-alpine

WORKDIR /usr/src/app

COPY dist /usr/src/app/dist/
COPY ecosystem.config.js /usr/src/app/

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
