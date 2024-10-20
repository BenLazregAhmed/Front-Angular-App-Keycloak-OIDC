FROM node as build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

RUN npm run build

FROM nginx

#### copy artifact build from the 'build environment'
COPY --from=build /usr/src/app/dist/customer-front-angular-app/browser /usr/share/nginx/html

EXPOSE 80
