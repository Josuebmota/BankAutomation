FROM node:14-alpine
ENV TZ=America/Fortaleza
WORKDIR /usr/src/app
COPY package.json ./
COPY babel.config.js ./
RUN npm install 
COPY . .
RUN npm run-script build
CMD npm start
EXPOSE 80